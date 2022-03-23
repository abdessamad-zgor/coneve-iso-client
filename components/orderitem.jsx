import CartItem from './cartitem';

function OrderItem(props) {
  const OrderAt = new Date(props.order.orderedAt);
  return (
    <div className="order-item">
      <div className="order-item-date">{`${OrderAt.toDateString()}`}</div>
      <div className="order-item-content">
        {props.order.products.map((product) => (
          <CartItem product={product} order />
        ))}
        <div className="order-item-footer">
          <h3>{props.order.estinatedTotal}</h3>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
