import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book';
import Form from '../Form';

const bookApiReturn = [
  {
    id: uuidv4(),
    name: 'Learn Modern React',
    author: 'John Doe',
    progress: 80,
  },
];

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    setBooks(bookApiReturn);
    setLoading(false);
  };

  const addBook = (book) => setBooks([...books, { ...book, id: uuidv4() }]);
  const removeBook = (id) => setBooks([...books.filter((book) => book.id !== id)]);

  useEffect(() => {
    function cleanup() {
      if (loading) fetchBooks();
    }

    return cleanup();
  });

  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} info={book} remove={removeBook} />
        ))}
      </div>

      <Form addBook={addBook} />
    </>
  );
};

export default Home;
