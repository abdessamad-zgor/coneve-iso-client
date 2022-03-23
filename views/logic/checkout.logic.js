import { useState, useEffect } from 'react';

export default function useLogic(props) {
  const [aboveMin, setAboveMin] = useState(getTotal >= 150);

  useEffect(() => {
    if (getTotal() >= 150) {
      setAboveMin(true);
    }
  }, [props.cartItems.length]);

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
