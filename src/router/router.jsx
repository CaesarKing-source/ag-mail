import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MailMessage from '../pages/MailMessage';

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
        element: <MailMessage />
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