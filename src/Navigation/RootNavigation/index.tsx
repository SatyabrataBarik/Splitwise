import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationScreen} from '../rootScreenFile';
import Login from '../../Screens/Login';
const root = createStackNavigator();
const RootNavigation = () => {
 
  return (
    <root.Navigator>
      {navigationScreen?.map((item: any) => {
        return (
          <root.Screen
            component={item?.Components}
            name={item.name}
            key={item.id}
            options={{headerShown: false}}
         
          />
        );
      })}
      {/* <root.Screen component={Login} name='login'/> */}
    </root.Navigator>
  );
};

export default RootNavigation;
