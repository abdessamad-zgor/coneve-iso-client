import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function AccountTabs(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const redirectToTab = (e) => {
    navigate(`/account/${e.target.getAttribute('name')}`);
  };
  return (
    <div className="account-tabs">
      <div className="account-tab" onClick={redirectToTab} name="overview">
        {t('overview')}
      </div>
      <div className="account-tab" onClick={redirectToTab} name="orders">
        {t('my orders')}
      </div>
      <div className="account-tab" onClick={redirectToTab} name="wishlist">
        {t('my wishlist')}
      </div>
    </div>
  );
}

export default AccountTabs;
