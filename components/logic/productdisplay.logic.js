import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import * as actions from '../../store/slices/cartSlice';

export default function useLogic() {
  //using a ref make sure that they wont be lost between re-renders
  const options = useRef({});
  const [quantity, setQuantity] = useState(1);

  const productinView = useSelector((state) => state.products.inView.value);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(actions.addToCart({ product: productinView, quantity: quantity, options: options.current }));
  };

  //setting up options object
  useEffect(() => {
    //make sure that options are not already set
    let optionKeys = options.current != {} ? options.current : {};
    if (optionKeys == {}) {
      Object.keys(productinView.details).forEach((key) => {
        if (Array.isArray(productinView.details[key])) {
          //set defaults
          optionKeys[key] = productinView.details[key][0];
        }
      });
      options.current = optionKeys;
    }
  }, []);

  //set the appropriate value to the eppropriate option
  const setOptionValue = (e) => {
    options.current[e.target.getAttribute('option')] = e.target.getAttribute('value');
  };

  //setQuantity

  const handleQuantityChange = (e) => {
    const addOrDecreace = e.target.getAttribute('sign');
    switch (addOrDecreace) {
      case '+':
        setQuantity(quantity + 1);
        break;
      case '-':
        console.log(quantity - 1 != 0);
        if (quantity - 1 != 0) {
          console.log(quantity - 1 != 0);
          setQuantity(quantity - 1);
          break;
        }
      default:
        return;
    }
  };

  return { addToCart, setOptionValue, handleQuantityChange, quantity };
}
