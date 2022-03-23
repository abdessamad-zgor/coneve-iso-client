import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { resetStatus } from '../../store/slices/productSlice';

export default function useLogic(props) {
  const [authType, setAuthType] = useState('signup');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetStatus());
    };
  }, []);

  useEffect(() => {
    RedirectAction();
  }, [props.loggedIn]);

  const RedirectAction = () => {
    if (props.loggedIn) {
      if (location.state.forced) {
        navigate(`/${location.state.for}`);
      } else {
        navigate('/');
      }
    }
  };

  const changeAuthType = (value) => {
    setAuthType(value);
  };

  return { changeAuthType, authType, RedirectAction };
}
