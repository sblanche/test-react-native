/* eslint-disable prettier/prettier */
import createStackNavigator from 'react-navigation';
import { HomeScreen } from '../HomeScreen';

const AppNavigator = createStackNavigator({
    HomeScreen},
    { initialRouteName : 'HomeScreen' }
);

export default AppNavigator;
