import PropTypes from 'prop-types';
import { useState } from 'react';

const Book = ({ info, remove }) => {
  const [book, setBook] = useState({ ...info });

  const updateBook = () => setBook({ ...info });

  return (
    <>
      <div className="book-item">
        <div className="left-card">
          <div className="information">
            <h4>{book.name}</h4>
            <small>{book.author}</small>
            <ul className="btn-actions">
              <li>
                <button type="button">comments</button>
              </li>
              <li>
                <button type="button" onClick={() => remove(book.id)}>remove</button>
              </li>
              <li>
                <button type="button" onClick={updateBook}>edit</button>
              </li>
            </ul>
          </div>

          <div className="progress">
            <div className="progress-bar" />
            <div className="progress-info">
              <h3>{`${book.progress} %`}</h3>
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
  info: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
