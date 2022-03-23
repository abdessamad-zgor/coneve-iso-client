import { loginUserThunk, signUpUserThunk } from '../../store/thunks/userThunks';
import { useDispatch } from 'react-redux';

export default function useLogic() {
  const dispatch = useDispatch();

  const loginClick = (data) => {
    dispatch(loginUserThunk(data));
  };

  const signUpClick = (data) => {
    dispatch(signUpUserThunk(data));
  };

  return {
    loginClick,
    signUpClick,
  };
}
