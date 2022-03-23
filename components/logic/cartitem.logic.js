import { useDispatch } from 'react-redux';
import * as actions from '../../store/slices/cartSlice';

export default function useLogic(product) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(actions.addQuantity(product));
  };
  const decreaseQuantity = () => {
    dispatch(actions.reduceQuantity(product));
  };
  return { increaseQuantity, decreaseQuantity };
}
