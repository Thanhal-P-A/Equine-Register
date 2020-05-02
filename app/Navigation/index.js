import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const Stack = createStackNavigator();

function RootNavigator(){
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{
                headerShown:false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

export default RootNavigator;