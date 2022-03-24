import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';
import Message from './message';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addOrderThunk, changeAddressThunk, getAddressThunk } from '../store/thunks/userThunks';

function ShippingAddress(props) {
  //use translation
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAddressThunk());
  }, []);

  //check if the component is in the Checkout view
  let isCheckout = location.pathname == '/checkout';

  //triggered onSubmit
  const Submit = (data) => {
    //if the component is in Checkout then add order
    //else change address
    if (isCheckout) {
      let order = {
        products: props.cartItems,
        user: props.user,
        estimatedTotal: props.total,
        address: data,
        orderedAt: Date.now(),
      };
      dispatch(addOrderThunk(order));
    } else {
      if (!_.isEqual(props.address, address)) {
        dispatch(changeAddressThunk(address));
      }
    }
  };

  const footer = () => {
    //change footer based on the location of the component
    if (isCheckout) {
      return (
        <>
          <div className="address-default">
            <input type="checkbox" defaultValue={false} {...register('setDefaultAddress')} />
            <p>set this address as a default.</p>
          </div>
          {props.status == 'loading' ? (
            <button className="address-submit">
              <ClipLoader size="15px" color="#fff" />
            </button>
          ) : (
            <input className="address-submit" value="Add Order" type="submit" />
          )}
        </>
      );
    } else {
      return (
        <>
          {props.status == 'loading' ? (
            <button className="address-submit">
              <ClipLoader size="15px" color="#fff" />
            </button>
          ) : (
            <input type="submit" className="address-submit" value="Save" />
          )}
        </>
      );
    }
  };

  return (
    <div className="address">
      {props.status == 'completed' ? <Message type="success" msg="Order was added successfully." /> : ''}
      <form className="address-form" onSubmit={handleSubmit(Submit)}>
        <div className="address-header">
          <h1 className="address-title"> {t('shipping Address')}</h1>
        </div>
        <div className="address-row">
          <label htmlFor="" className="address-label">
            {t('Full Name')}
          </label>
          <input
            className="address-input"
            defaultValue={props.defaultAddress.fullName}
            type="text"
            {...register('fullName', { required: true })}
          />
          {errors.fullName && <span className="error-input">Enter a valid Full Name.</span>}
        </div>

        <div className="address-flex">
          <div className="half">
            <label htmlFor="" className="address-label">
              {t('Phone Number')}
            </label>
            <input
              className="address-input"
              defaultValue={props.defaultAddress.phone}
              {...register('phone', { required: true })}
              type="tel"
            />
            {errors.phone && <span className="error-input">Enter a valid phone number.</span>}
          </div>
          <div className="half">
            <label htmlFor="" className="address-label">
              {t('City')}
            </label>
            <input
              className="address-input"
              defaultValue={props.defaultAddress.city}
              {...register('city', { required: true })}
              name="city"
              type="text"
            />
            {errors.city && <span className="error-input">Choose the city you live in .</span>}
          </div>
        </div>
        <div className="address-row">
          <label htmlFor="" className="address-label">
            {t('Street Address')}
          </label>
          <input
            className="address-input"
            defaultValue={props.defaultAddress.streetAddress}
            {...register('streetAddress', { required: true })}
            name="streetAddress"
            type="text"
          />
          {errors.streetAddress && <span className="error-input">Enter a valid street address .</span>}
        </div>

        <div className="address-footer">{footer()}</div>
      </form>
      {props.status == 'failed' ? <Message type="error" msg={props.error.msg} /> : ''}
    </div>
  );
}

export default ShippingAddress;
