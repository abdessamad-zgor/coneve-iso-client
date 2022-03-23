import useLogic from './logic/authform.logic';
import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';

function LoginForm(props) {
  const { loginClick } = useLogic();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="container">
      <form className="auth-form" onSubmit={handleSubmit(loginClick)}>
        <div className="auth-form-header">Login</div>
        <div className="auth-form-row">
          <label htmlFor="" className="auth-form-label">
            Email, phone number or username
          </label>
          <input
            name="identifier"
            {...register('identifier', { required: true })}
            type="text"
            className="auth-form-input"
          />
        </div>
        <div className="auth-form-row">
          <label htmlFor="" className="auth-form-label">
            password
          </label>
          <input
            name="password"
            {...register('password', { required: true })}
            type="password"
            className="auth-form-input"
          />
        </div>
        <div className="signup-redirect">
          <a
            onClick={(e) => {
              e.preventDefault();
              props.setAuthType('signup');
            }}
            target="_blank"
            className="small"
            href=""
          >
            create new account?
          </a>
        </div>
        <div className="auth-form-footer">
          {props.status == 'loading' ? (
            <button className="auth-form-action">
              <ClipLoader size="15px" color="#fff" />
            </button>
          ) : (
            <input className="auth-form-action" value="Login" type="submit" />
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
