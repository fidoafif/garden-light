import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, BottomNavigation} from 'react-native-paper';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import HomePage from '../Home';
import SettingPage from '../Setting';
import DevicePage from '../Device';

const Tab = createBottomTabNavigator();

export default function MyComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          style={{backgroundColor: '#FFFFFF'}}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <ButtonIcon icon="logo" size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DevicePage}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({color, size}) => {
            return <ButtonIcon icon="device" size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingPage}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => {
            return <ButtonIcon icon="setting" size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
