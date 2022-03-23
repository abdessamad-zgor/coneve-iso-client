import { Link } from 'react-router-dom';
import Searchbar from './searchbar';
import Dropdown from './dropdown';
import Drawer from './drawer';
import { Carticon } from '../icons';
import $ from 'jquery';

//import logic
import useLogic from './logic/appbar.logic';

function Appbar() {
  return (
    <div className="appbar">
      <div className="appbar-content">
        <span>
          <Link to="/" className="appbar-logo">
            Coneve
          </Link>
        </span>
        <Searchbar />
        <span
          className="appbar-cart"
          onClick={() => {
            $('#drawer').animate({ right: '0' }, 300);
          }}
        >
          <Carticon />
        </span>
        <Dropdown />
      </div>
    </div>
  );
}

export default Appbar;
