import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../store/common/actions';

export default function useLogic() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUser());
  };

  const handleOpenDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return { dropdownOpen, handleOpenDropdown, signOut };
}
