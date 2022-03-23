import reactDom from 'react-dom';
import './i18n';
import App from './App';
import './styles/index.scss';

const renderMethod = module.hot ? reactDom.render : reactDom.hydrate;

renderMethod(<App />, document.getElementById('root'));
