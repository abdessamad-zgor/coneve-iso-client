import AccountTabs from '../components/accounttabs';
import Overview from '../components/overview';
import Orders from '../components/orders';
import Wishlist from '../components/wishlist';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { resetStatus } from '../store/slices/productSlice';

function AccountSettings() {
  const [tabName, setTabName] = useState('overview');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetStatus());
    };
  }, []);
  const changeTab = (e) => {
    const tabName = e.target.getAttribute('name');
    setTabName(tabName);
  };
  return (
    <div className="account-settings">
      <AccountTabs changeTab={changeTab} />
      <div className="account-settings-content">{setContent(tabName)}</div>
    </div>
  );
}

function setContent(tabName) {
  switch (tabName) {
    case 'overview':
      return <Overview />;
    case 'orders':
      return <Orders />;
    case 'wishlist':
      return <Wishlist />;
  }
}

export default AccountSettings;
