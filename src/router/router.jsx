
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import RootLayout from '../layout/RootLayout';


const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children:[
        {
            index: true,
            element: <Home></Home>
        }
      ]
    },
  ]);
export default router;