
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import RootLayout from '../layout/RootLayout';
import AllVehicles from '../Pages/AllVehicles';
import AddVehicle from '../Pages/AddVehicle';
import MyVehicles from '../Pages/MyVehicles';
import MyBookings from '../Pages/MyBookings';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ViewDetails from '../Pages/ViewDetails';
import PrivateRoute from '../Components/PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children:[
        {
            index: true,
            Component: Home
        },
        {
          path: 'all-vehicles',
          loader: ()=> fetch('http://localhost:3000/all-vehicles'),
          Component: AllVehicles
        },
       
        {
          path: 'add-vehicles',
          element: <PrivateRoute>
            <AddVehicle></AddVehicle>
          </PrivateRoute>
        },
        {
          path: 'my-vehicles',
          Component: MyVehicles
        },
        {
          path: 'my-bookings',
          Component: MyBookings
        },
        {
          path: 'login',
          Component: Login
        },
        {
          path: 'register',
          Component: Register
        },
        {
          path: 'vehiclesDetails/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/all-vehicles/${params.id}`),
          element: <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        }
      ]
    },
  ]);
export default router;