import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetStatus } from '../../store/slices/productSlice';
import $ from 'jquery';

export default function useLogic() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drawerElement = useRef();
  const handleCloseDrawer = () => {
    $('.drawer-active').animate({ right: '-100%' }, 300, 'ease-out');
  };

  const BackHome = (e) => {
    e.preventDefault();
    dispatch(resetStatus);
    navigate('/');
  };
  return { drawerOpen, setDrawerOpen, drawerElement, handleCloseDrawer, BackHome };
}
