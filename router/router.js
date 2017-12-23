import About from '../common/About';
import Home from '../common/Home';

const routes = [
   {
      component: Home,
      path: '/home',
      exact: true
   },
   {
      component: About,
      path: '/about',
      exact: true
   }
];

export default routes;