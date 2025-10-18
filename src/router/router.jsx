import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import Mail from '../pages/Mail';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: '/mail/inbox/:id',
        element: <Mail />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  }
]);