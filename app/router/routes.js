/**
 *
 * These are the screens you can go to
 *
 */

import HomeScreen from 'screens/HomeScreen/Loadable';
import StyleScreen from 'screens/StyleScreen/Loadable';

const routes = {
  home: {
    path: '/',
    screen: HomeScreen,
  },
  style: {
    path: '/style',
    screen: StyleScreen,
  },
};

export default routes;
