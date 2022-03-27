import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getOrdersThunk } from '../store/thunks/userThunks';

import OrderItem from './orderitem';

function Orders(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersThunk(props.uid));
  }, []);
  return (
    <div className="orders">
      {props.status == 'completed' && props.orders.length > 1
        ? props.orders.map((order) => {
            return <OrderItem order={order} />;
          })
        : ''}
    </div>
  );
}

const matPropsToState = (state) => {
  return {
    orders: state.user.orders.value,
    uid: state.user.info.value.uid,
    status: state.user.orders.status,
  };
};

export default connect(matPropsToState)(Orders);
