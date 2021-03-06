import { connect } from 'react-redux';
import UserInfo from './userinfo';
import ShippingAddress from './shippingaddress';

function Overview(props) {
  return (
    <div className="overview">
      <UserInfo user={props.user} />
      <ShippingAddress defaultAddress={props.address} user={props.user} />
    </div>
  );
}

const mapPropsToState = (state) => {
  return {
    user: state.user.info.value,
    address: state.user.info.address,
  };
};

export default connect(mapPropsToState)(Overview);
