import { useLocation } from 'react-router-dom';

function Path() {
  const location = useLocation();
  let pathname = location.pathname;

  return <div className="path-root">Path</div>;
}

export default Path;
