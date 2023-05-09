import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { add, createBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    author: '',
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
    const id = uuid();
    dispatch(createBook({ ...book, item_id: id }));
    dispatch(add({ ...book, item_id: id }));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={book.title}
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
          <option disabled value="">select your category</option>
          <option value="web-development">web development</option>
          <option value="computer-science">computer science</option>
          <option value="data-science">data science</option>
        </select>

        <button type="submit" className="btn-submit">add book</button>
      </form>
    </>
  );
};

export default Form;
