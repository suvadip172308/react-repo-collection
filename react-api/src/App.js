import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ItemDetails, { fetchProductDetails } from './components/ItemDetails';
import { lazy, Suspense } from 'react';

const ItemDetails = lazy(() => import('./components/ItemDetails'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/product/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ItemDetails/>
          </Suspense>
        ),
        loader: fetchProductDetails
      },
    ]
  }
])

function App() {
  return <RouterProvider router={appRouter}/>;
}

export default App;
