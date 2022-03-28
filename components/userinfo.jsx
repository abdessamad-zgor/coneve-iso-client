import React from 'react';
import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, connect } from 'react-redux';
import { changeUserInfoThunk } from '../store/thunks/userThunks';

function UserInfo(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const saveInfo = (data) => {
    dispatch(changeUserInfoThunk({ uid: props.uid, idToken: props.idToken, data, refreshToken: props.refreshToken }));
  };

  return (
    <div className="userinfo">
      <form className="userinfo-form" onSubmit={handleSubmit(saveInfo)}>
        <div className="userinfo-header">
          <h1 className="userinfo-title">User Info</h1>
        </div>
        <div className="userinfo-flex">
          <div className="half">
            {' '}
            <label htmlFor="" className="userinfo-label">
              Full Name
            </label>
            <input
              type="text"
              {...register('fullName')}
              defaultValue={props.user.fullName}
              className="userinfo-input"
            />
          </div>
          <div className="half">
            <label htmlFor="" className="userinfo-label">
              Birth Day
            </label>
            <input type="text" {...register('birthDay')} className="userinfo-input" />
          </div>
        </div>

        <div className="userinfo-flex">
          <div className="half">
            <label htmlFor="" {...register('sexe')} className="userinfo-label">
              Sexe
            </label>
            <input type="text" className="userinfo-input" />
          </div>
          <div className="half">
            <label htmlFor="" className="userinfo-label">
              Phone Number
            </label>
            <input type="text" {...register('phone')} defaultValue={props.user.phone} className="userinfo-input" />
          </div>
        </div>

        <div className="userinfo-row">
          <label htmlFor="" className="userinfo-label">
            Email
          </label>
          <input type="text" {...register('email')} defaultValue={props.user.email} className="userinfo-input" />
        </div>
        <div className="userinfo-footer">
          <button className="userinfo-submit">Save</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.info.uid,
    idToken: state.user.info.idToken,
    refreshToken: state.user.info.refreshToken,
  };
};

export default connect(mapStateToProps)(UserInfo);
