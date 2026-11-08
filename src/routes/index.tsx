import { createBrowserRouter, Navigate } from 'react-router';
import AppLayout from '../components/layouts/AppLayout';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);