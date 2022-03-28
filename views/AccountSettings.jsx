import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetStatus } from '../store/slices/productSlice';

import AccountTabs from '../components/accounttabs';

import { Outlet } from 'react-router-dom';

function AccountSettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetStatus());
    };
  }, []);

  return (
    <div className="account-settings">
      <AccountTabs />
      <div className="account-settings-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountSettings;
