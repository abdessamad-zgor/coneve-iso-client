import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getPersistedData } from '../store/common/actions';
import Appbar from '../components/appbar';
import Path from '../components/path';
import Drawer from '../components/drawer';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import { useStore } from 'react-redux';
import { isEqual } from '../helpers/utils';

import MobileMenu from '../components/mobilemenu';

function Layout(props) {
  const dispatch = useDispatch();
  const store = useStore();
  store.subscribe(() => {
    let state = store.getState();
    let data = JSON.parse(localStorage.getItem('state'));

    if (!isEqual(data, state)) {
      localStorage.setItem('state', JSON.stringify(state));
    }
  });

  useEffect(() => {
    dispatch(getPersistedData());
  }, []);

  return (
    <div className="layout-root">
      <Appbar />
      <Path />
      <Drawer />
      <div className="layout-page-oulet">
        <Outlet />
      </div>

      <Footer />
      <MobileMenu />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.info,
  };
};

export default connect(mapStateToProps)(Layout);
