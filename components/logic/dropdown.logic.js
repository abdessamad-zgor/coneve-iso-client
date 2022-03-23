import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOutThunk } from '../../store/thunks/userThunks';

export default function useLogic() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutThunk());
  };

  const handleOpenDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return { dropdownOpen, handleOpenDropdown, signOut };
}
