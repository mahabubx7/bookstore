import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  CategoryPage, ErrorPage, HomePage, RootPage,
} from './components';
import 'remixicon/fonts/remixicon.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/categories',
          element: <CategoryPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
