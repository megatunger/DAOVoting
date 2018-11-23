import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Home } from '../components/Home';
import { Counter } from '../components/Counter';
import { LoginScreen, LoginScreenView } from '../components/LoginScreen';

export const auth = createStackNavigator({ LoginScreen: LoginScreenView });
export const app = createBottomTabNavigator({
  Home: Home,
  Ahihihisdfd: Counter
});
export const Nav = createStackNavigator(
  {
    auth: { screen: LoginScreenView, navigationOptions: { header: null } },
    App: { screen: app, navigationOptions: { header: null } }
  },
  {
    initialRouteName: 'auth'
  }
);
