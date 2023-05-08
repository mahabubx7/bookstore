import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/bookSlice';

const Book = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="book-item">
        <div className="left-card">
          <div className="information">
            <h4>{info.title}</h4>
            <small>{info.author}</small>
            <p>{info.category}</p>
            <ul className="btn-actions">
              <li>
                <button type="button">comments</button>
              </li>
              <li>
                <button type="button" onClick={() => dispatch(remove(info.item_id))}>remove</button>
              </li>
              <li>
                <button type="button">edit</button>
              </li>
            </ul>
          </div>

          <div className="progress">
            <div className="progress-bar" />
            <div className="progress-info">
              <h3>{`${info.progress} %`}</h3>
              <small>completed</small>
            </div>
          </div>
        </div>

        <div className="right-card" />
      </div>
    </>
  );
};

Book.propTypes = {
  info: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
