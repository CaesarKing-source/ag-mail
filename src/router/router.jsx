import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import Starred from '../pages/Starred';
import Sent from '../pages/Sent';
import Draft from '../pages/Draft';
import Trash from '../pages/Trash';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MailMessage from '../pages/MailMessage';
import Profile from '../pages/Profile';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector(state => state.user);
  return isAuth ? children : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: '/starred',
        element: <Starred />
      },
      {
        path: '/sent',
        element: <Sent />
      },
      {
        path: '/draft', 
        element: <Draft />
      },
      {
        path: '/trash',
        element: <Trash />
      },
      {
        path: '/mail/inbox/:id',
        element: <MailMessage />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);