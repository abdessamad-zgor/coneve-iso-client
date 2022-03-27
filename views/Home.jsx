import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ProductCard from '../components/productcard';
import { populateIndex } from '../store/thunks/productsThunk';
import { resetStatus } from '../store/slices/productSlice';
import { useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if ((props.status == 'completed' || props.status == 'idle') && Object.keys(props.index).length == 0) {
      dispatch(populateIndex());
    }
    return () => {
      dispatch(resetStatus());
    };
  }, []);

  return (
    <div className="home relative">
      <Carousel className="slider" showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay>
        <div className="slide">
          <div
            className=""
            style={{
              backgroundImage: 'url(https://picsum.photos/1000/250)',
              width: '100%',
              height: '10em',
            }}
          ></div>
        </div>
        <div className="slide">
          <div
            className=""
            style={{
              backgroundImage: 'url(https://picsum.photos/1024/250)',
              width: '100%',
              height: '10em',
            }}
          ></div>
        </div>
      </Carousel>

      <section className="home-collection">
        <div className="home-title">
          <h2 className="">Top Whole Sale Items</h2>{' '}
          <p
            className="see-more"
            onClick={() => {
              navigate('/collections');
            }}
          >
            See More ...
          </p>
        </div>

        <div className="container">
          <div className="align-center-flex wrap">
            {(props.status == 'completed' || props.status == 'idle') && Object.keys(props.index).length > 0
              ? Object.keys(props.index.gros).map((key, i) => (
                  <ProductCard id={key} key={i} product={props.index.gros[key]} />
                ))
              : ''}
          </div>
        </div>
      </section>
      <section className="home-collection">
        <div className="home-title">
          <h2 className="">Top Natural Products</h2>
          <p
            className="see-more"
            onClick={() => {
              navigate('/collections');
            }}
          >
            See More ...
          </p>
        </div>

        <div className="container">
          <div className="align-center-flex wrap">
            {(props.status == 'completed' || props.status == 'idle') && Object.keys(props.index).length > 0
              ? Object.keys(props.index.natural).map((key, i) => (
                  <ProductCard id={key} key={i} product={props.index.natural[key]} />
                ))
              : ''}
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.products.index.status,
    index: state.products.index.value,
    error: state.products.index.error,
  };
};

export default connect(mapStateToProps)(Home);
