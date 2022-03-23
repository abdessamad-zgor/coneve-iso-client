import { useNavigate } from 'react-router';

export default function useLogic(props) {
  const navigate = useNavigate();

  const RedirectToCheckout = () => {
    if (props.loggedIn) {
      navigate('/checkout');
    } else {
      navigate('/auth', { state: { forced: true, for: 'checkout' } });
    }
  };

  return { RedirectToCheckout };
}
