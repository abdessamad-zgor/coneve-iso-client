import useLogic from './logic/authform.logic';
import $ from 'jquery';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function SignupForm(props) {
  const { signUpClick } = useLogic();
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .max(36, 'Password cannot exceed more than 12 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .max(36, 'Password cannot exceed more than 12 characters')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onTouched',
  });

  return (
    <div className="container">
      <form className="auth-form" onSubmit={handleSubmit(signUpClick)}>
        <div className="auth-form-header">SignUp</div>
        <div
          className="auth-form-row"
          onFocus={(e) => {
            $('label#fullName').animate({ top: '-0.5em', color: 'green' }, 300);
          }}
          onBlur={(e) => {
            $('label#fullName').animate({ top: '-0.2em', color: 'grey' }, 300);
          }}
        >
          <label htmlFor="" id="fullName" className="auth-form-label">
            Full Name
          </label>
          <input
            type="text"
            defaultValue=""
            {...register('fullName', {
              required: true,
              pattern:
                /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
            })}
            name="fullName"
            className="auth-form-input"
          />
          {errors.fullName && <span className="error-input">Full name should only contain alphabits (a-Z).</span>}
        </div>
        <div
          className="auth-form-row"
          onFocus={(e) => {
            $('label#email').animate({ top: '-0.5em', color: 'green' }, 300);
          }}
          onBlur={(e) => {
            $('label#email').animate({ top: '-0.2em', color: 'grey' }, 300);
          }}
        >
          <label htmlFor="" id="email" className="auth-form-label">
            Email
          </label>
          <input
            type="text"
            defaultValue=""
            {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
            name="email"
            className="auth-form-input"
          />
          {errors.email && <span className="error-input">Enter valid email.</span>}
        </div>
        <div
          className="auth-form-row"
          onFocus={(e) => {
            $('label#phone').animate({ top: '-0.5em', color: 'green' }, 300);
          }}
          onBlur={(e) => {
            $('label#phone').animate({ top: '-0.2em', color: 'grey' }, 300);
          }}
        >
          <label htmlFor="" id="phone" className="auth-form-label">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue=""
            {...register('phone', { pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ })}
            name="phone"
            className="auth-form-input"
          />
          {errors.phone && <span className="error-input">Enter valid phone number.</span>}
        </div>
        <div
          className="auth-form-row"
          onFocus={(e) => {
            $('label#password').animate({ top: '-0.5em', color: 'green' }, 300);
          }}
          onBlur={(e) => {
            $('label#password').animate({ top: '-0.2em', color: 'grey' }, 300);
          }}
        >
          <label htmlFor=" " id="password" className="auth-form-label">
            Password
          </label>
          <input
            type="password"
            defaultValue=""
            {...register('password')}
            name="password"
            className="auth-form-input"
          />
        </div>
        <div
          className="auth-form-row"
          onFocus={(e) => {
            $('label#confirmPassword').animate({ top: '-0.5em', color: 'green' }, 300);
          }}
          onBlur={(e) => {
            $('label#confirmPassword').animate({ top: '-0.2em', color: 'grey' }, 300);
          }}
        >
          <label htmlFor="" id="confirmPassword" className="auth-form-label">
            Confirm Password
          </label>
          <input
            type="password"
            defaultValue=""
            {...register('confirmPassword')}
            name="confirmPassword"
            className="auth-form-input"
          />
        </div>
        <div className="signup-redirect">
          <a
            onClick={(e) => {
              e.preventDefault();
              props.setAuthType('login');
            }}
            target="_blank"
            className="small"
            href=""
          >
            already have an account?
          </a>
        </div>
        <div className="auth-form-footer">
          {props.status == 'loading' ? (
            <button className="auth-form-action">
              <ClipLoader size="15px" color="#fff" />
            </button>
          ) : (
            <input className="auth-form-action" value="Sign up" type="submit" />
          )}
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
