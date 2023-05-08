import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => {
  const [book, setBook] = useState({
    name: '',
    author: '',
    progress: 0,
    category: '',
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
      category: '',
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
          required
        />

        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author name"
          required
        />

        <select name="category" onChange={handleChange} value={book.category} required>
          <option disabled selected value="">select your category</option>
          <option value="web-development">web development</option>
          <option value="computer-science">computer science</option>
          <option value="data-science">data science</option>
        </select>

        <button type="submit" className="btn-submit">add book</button>
      </form>
    </>
  );
};

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
