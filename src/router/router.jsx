
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
import UpdateVehicle from '../Pages/UpdateVehicle';
import ViewBookings from '../Pages/ViewBookings';


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
          path: 'vehiclesDetails/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/all-vehicles/${params.id}`),
          element: <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        },
        {
          path: 'my-vehicles',
          element: <PrivateRoute>
            <MyVehicles></MyVehicles>
          </PrivateRoute>
        },
        {
          path: 'my-bookings',
          element: <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        },
        {
          path: 'my-bookings/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/my-bookings/${params.id}`),
          element: <PrivateRoute>
            <ViewBookings></ViewBookings>
          </PrivateRoute>
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
          path: 'update-vehicle/:id',
          element: <PrivateRoute> 
            <UpdateVehicle></UpdateVehicle>
          </PrivateRoute>
        }
        
      ]
    },
  ]);
export default router;