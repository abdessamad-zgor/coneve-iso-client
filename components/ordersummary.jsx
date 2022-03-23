import { connect } from 'react-redux';
import CartItem from './cartitem';
import { useTranslation } from 'react-i18next';

function OrderSummary(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="order-summary">
      <h2 className="title">{t('order symmary')}</h2>
      <div className="order-summary-content">
        {props.products.map((product, i) => (
          <CartItem product={product} key={i} />
        ))}
      </div>
      <div className="order-summary-footer">
        <h4 className="title">{t('total').toUpperCase()}</h4>
        <div className="grow"></div>
        <p className="order-total">{props.total}MAD</p>
      </div>
    </div>
  );
}

export default OrderSummary;
