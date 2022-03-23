const ReactDomServer = require('react-dom/server');
const HTML = require('../../components/HTML').default;
const initStore = require('../../store').default;
const routes = require('../../shared/routes').default;
const { Provider } = require('react-redux');
const { matchRoutes, renderMatches } = require('react-router');
const { StaticRouter } = require('react-router-dom/server');

const renderViewMiddleware = async (req, res, next) => {
  let promise;
  let store = initStore();

  const matches = matchRoutes(routes, req.url);

  matches.forEach(async (match) => {
    if (match.route.fetchData) {
      promise = match.route.fetchData(store, match.params);
    } else {
      promise = Promise.resolve(null);
    }
  });
  promise.then((json) => {
    const stringifiedData = JSON.stringify(store.getState());
    const app = ReactDomServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>{renderMatches(matches)}</StaticRouter>
      </Provider>
    );
    const html = ReactDomServer.renderToString(<HTML data={stringifiedData} html={app} />);

    res.send(`<!DOCTYPE html>${html}`);
  });
};

module.exports = renderViewMiddleware;
