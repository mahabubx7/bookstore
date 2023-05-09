import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove, deleteBook } from '../redux/books/bookSlice';

const Book = ({ info }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="book-item">
        <div className="left-card">
          <div className="information">
            <p>{info.category}</p>
            <h4>{info.title}</h4>
            <small>{info.author}</small>
            <ul className="btn-actions">
              <li>
                <button type="button">comments</button>
              </li>
              <li>
                <button type="button" onClick={() => handleRemove(info.item_id)}>remove</button>
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

        <div className="right-card">
          <p>current chapter</p>
          <h4>chapter 7</h4>
          <div>
            <button type="button">update progress</button>
          </div>
        </div>
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
