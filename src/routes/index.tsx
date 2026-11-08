import { createBrowserRouter, Navigate } from 'react-router';
import AppLayout from '../components/layouts/AppLayout';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ExperiencePage from '../pages/ExperiencePage';
import SkillsPage from '../pages/SkillsPage';
import CertificatesPage from '../pages/CertificatesPage';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/experience", element: <ExperiencePage /> },
      { path: "/skills", element: <SkillsPage /> },
      { path: "/certificates", element: <CertificatesPage /> },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
