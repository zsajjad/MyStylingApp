import { createStackNavigator, createAppContainer } from 'react-navigation';

import configs from 'configs';
import routes from './routes';

const AppNavigator = createStackNavigator(routes, {
  initialRouteName: configs.initialRouteName,
  initialRouteParams: configs.initialRouteParams || {},
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
