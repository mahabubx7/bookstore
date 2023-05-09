import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/bookSlice';
import Book from '../Book';
import Form from '../Form';
import '../styles/books.scss';

const Home = () => {
  const { data, isLoading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) return (<p>Loading...!</p>);

  if (error) return (<p>Something went wrong!</p>);

  return (
    <>
      <div className="books">
        {data.map((book) => (<Book key={book.item_id} info={book} />))}
      </div>

      <Form />
    </>
  );
};

export default Home;
