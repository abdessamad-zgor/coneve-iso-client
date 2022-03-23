import { connect } from 'react-redux';
import LoginForm from '../components/loginForm';
import SignupForm from '../components/signupForm';
import useLogic from './logic/auth.logic';

function Auth(props) {
  const { authType, changeAuthType, RedirectAction } = useLogic(props);

  return (
    <div className="auth">
      <div className="form-container">
        {/* <LoginForm setAuthType={changeAuthType}/> */}
        {authType == 'signup' ? (
          <SignupForm
            setAuthType={changeAuthType}
            status={props.status}
            error={props.error}
            redirect={RedirectAction}
          />
        ) : (
          <LoginForm setAuthType={changeAuthType} status={props.status} error={props.error} redirect={RedirectAction} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.info.loggedIn,
    status: state.user.info.status,
    error: state.user.info.error,
  };
};

export default connect(mapStateToProps)(Auth);
