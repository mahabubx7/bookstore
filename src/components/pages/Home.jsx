import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book';
import Form from '../Form';

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const [bookArr, setBookArr] = useState([]);

  useEffect(() => setBookArr([...books]), [books]);

  return (
    <>
      <div className="books">
        {bookArr.length > 0 ? bookArr.map((book) => (
          <Book key={book.id} info={book} />
        )) : null}
      </div>

      <Form />
    </>
  );
};

export default Home;
