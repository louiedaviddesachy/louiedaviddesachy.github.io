import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Teaching } from './pages/Teaching';
import { Curriculum } from './pages/Curriculum';
import { Projects } from './pages/Projects';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'teaching', Component: Teaching },
      { path: 'curriculum', Component: Curriculum },
      { path: 'projects', Component: Projects },
    ],
  },
]);
