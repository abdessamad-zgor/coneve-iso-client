import { Usericon } from '../icons';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
//import logic
import useLogic from './logic/dropdown.logic';
import { useTranslation } from 'react-i18next';

function Dropdown(props) {
  const navigate = useNavigate();

  const logic = useLogic();
  const { t, i18n } = useTranslation('translation');

  const redirectToTab = (e) => {
    navigate('/account', { state: { tab: e.target.getAttribute('name') } });
  };
  return (
    <div className="dropdown">
      <span className="dropdown-icon" onClick={logic.handleOpenDropdown}>
        <Usericon />
      </span>

      {/* make dropdown-content show based on the userAction */}
      {logic.dropdownOpen ? (
        <div
          className="dropdown-container"
          onMouseLeave={() => {
            setTimeout(logic.handleOpenDropdown, 1000);
          }}
        >
          <div className="dropdown-header">
            <p>hello, {props.userName}</p>
            <p className="thin small grey">{props.email}</p>
          </div>
          <div className="dropdown-content">
            <div className="dropdown-item" onClick={redirectToTab} name="overview">
              {t('overview')}
            </div>
            <div className="dropdown-item" onClick={redirectToTab} name="orders">
              {t('my orders')}
            </div>
            <div className="dropdown-item" onClick={redirectToTab} name="wishlist">
              {t('my wishlist')}
            </div>

            {props.loggedIn ? (
              <div className="dropdown-item" onClick={logic.signOut}>
                signout
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="dropdown-footer">
            <p>{t('change language')}</p>
            <div className="options">
              <div
                className="fab-small"
                onClick={() =>
                  i18n.changeLanguage('fr', (error, t) => {
                    console.log('hello translation');
                    console.log(error);
                    console.log(t('save'));
                    console.log(i18n.language);
                  })
                }
              >
                Fr
              </div>
              <div
                className="fab-small"
                onClick={() =>
                  i18n.changeLanguage('en', () => {
                    console.log('hello translation');
                  })
                }
              >
                En
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.info.value.fullName,
    email: state.user.info.value.email,
    loggedIn: state.user.info.loggedIn,
  };
};

export default connect(mapStateToProps)(Dropdown);
