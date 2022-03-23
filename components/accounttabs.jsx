import { useTranslation } from 'react-i18next';

function AccountTabs(props) {
  const { t, i18n } = useTranslation();
  return (
    <div className="account-tabs">
      <div className="account-tab" onClick={props.changeTab} name="overview">
        {t('overview')}
      </div>
      <div className="account-tab" onClick={props.changeTab} name="orders">
        {t('my orders')}
      </div>
      <div className="account-tab" onClick={props.changeTab} name="wishlist">
        {t('my wishlist')}
      </div>
      <div className="account-tab" onClick={props.changeTab} name="gifts">
        {t('my gifts')}
      </div>
    </div>
  );
}

export default AccountTabs;
