import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeContainer from '../containers/HomeContainer';

const Stack = createStackNavigator();

const {Navigator, Screen} = Stack;

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={'Home'} component={HomeContainer} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
