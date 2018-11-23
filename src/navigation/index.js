import { createBottomTabNavigator } from 'react-navigation';
import { Home } from '../components/Home';
import { Counter } from '../components/Counter';
import { LoginScreen, LoginScreenView } from '../components/LoginScreen';


export const Nav = createBottomTabNavigator({
  LoginScreen: LoginScreenView,
  Home: Home,
  Ahihihisdfd: Counter
});
