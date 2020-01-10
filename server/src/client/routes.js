import Home from './pages/Home';
import Users, { loadData } from './pages/Users';

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...Users,
    path: '/users'
  }
];
