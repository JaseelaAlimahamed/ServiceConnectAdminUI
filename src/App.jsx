import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import AppRouter from './routes/AppRoutes';

const router = createBrowserRouter(AppRouter);

export const App = () => {
  return (
    <Provider store={store}> 

      <RouterProvider router={router} />
      </Provider>
  );
};

export default App;
