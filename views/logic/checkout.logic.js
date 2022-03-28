import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogic(props) {
  const [aboveMin, setAboveMin] = useState(getTotal >= 150);
  const navigate = useNavigate();
  useEffect(() => {
    if (getTotal() >= 150 && props.user.loggedIn) {
      setAboveMin(true);
    } else if (props.user.loggedIn) {
      navigate('/auth');
    }
  }, [props.cartItems.length, props.user.loggedIn]);

  const getTotal = () => {
    let total = 0;
    props.cartItems.forEach((product) => (total += product.quantity * product.price));
    if (total >= 650) {
      return total;
    } else {
      return total + 50;
    }
  };

  return { aboveMin, getTotal };
}
