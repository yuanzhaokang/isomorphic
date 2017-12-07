import About from '../client/About';
import Home from '../client/Home';

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