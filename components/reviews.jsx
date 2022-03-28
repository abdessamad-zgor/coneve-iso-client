import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addReview } from '../store/thunks/productsThunk';

function Reviews(props) {
  const dispatch = useDispatch();
  const [newReview, setNewReview] = useState({
    starts: 5,
    body: '',
    username: '',
  });
  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const addReviewClick = () => {
    dispatch(
      addReview({
        id: props.productId,
        data: { ...newReview, username: props.username },
        idToken: props.idToken,
        refreshToken: props.refreshToken,
      })
    );
  };

  return (
    <div className="reviews-root">
      <h2>Reviews</h2>
      {props.reviews.length > 0 ? (
        <div className="reviews-card">
          {props.reviews.map((review, key) => (
            <div key={key} className="review">
              <h4>{review.username}</h4>
              <p>{review.body}</p>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}

      <div className="new-review">
        <div className="review-header">
          <h4>{props.username}</h4>
        </div>
        <textarea
          className="review-body"
          onChange={handleChange}
          value={newReview.body}
          name="body"
          id=""
          cols="30"
          rows="6"
          placeholder="What do you think ?"
        ></textarea>
        <button className="review-button" onClick={addReviewClick}>
          Add Review
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reviews: state.products.reviews.data,
    username: state.user.info.value.fullName,
    idToken: state.user.info.idToken,
    refreshToken: state.user.info.refreshToken,
  };
};

export default connect(mapStateToProps)(Reviews);
