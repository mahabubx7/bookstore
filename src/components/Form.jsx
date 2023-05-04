import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => {
  const [book, setBook] = useState({
    name: '',
    author: '',
    progress: 0,
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook({
      name: '',
      author: '',
      progress: 0,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={book.name}
          onChange={handleChange}
          placeholder="Book title"
        />

        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author name"
        />

        <button type="submit" className="btn-submit">add book</button>
      </form>
    </>
  );
};

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
