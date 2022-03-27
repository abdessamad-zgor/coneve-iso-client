import { connect } from 'react-redux';
import ProductCard from './productcard';

function ProductList(props) {
  return (
    <div className="product-list">
      {(props.status == 'completed' || props.status == 'idle') && Object.keys(props.index).length > 0
        ? Object.keys(props.index.all).map((key, i) => <ProductCard id={key} key={i} product={props.index.all[key]} />)
        : ''}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    index: state.products.index.value,
    status: state.products.index.status,
    error: state.products.index.error,
  };
};

export default connect(mapStateToProps)(ProductList);
