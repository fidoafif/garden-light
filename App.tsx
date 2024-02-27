import React from 'react';
import {Platform, StatusBar} from 'react-native';

import UIProvider from './src/theme/UIProvider';
import SignInPage from './src/pages/Authentications/SignIn';
import {AnimatedBootSplash} from './src/pages/AnimatedBootSplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpPage from './src/pages/Authentications/SignUp';
import EntryPage from './src/pages/Authentications/Entry';
import RegStep1 from './src/pages/Authentications/SignUp/RegStep1';
import RegStep2 from './src/pages/Authentications/SignUp/RegStep2';
import RegStep3 from './src/pages/Authentications/SignUp/RegStep3';
import HomePage from './src/pages/Home';
import RegSuccess from './src/pages/Authentications/SignUp/RegSuccess';
import LandingPage from './src/pages/Landing';
import SettingPage from './src/pages/Setting';
import DevicePage from './src/pages/Device';
import ScanDevicePage from './src/pages/Device/ScanDevice';
import AddDevicePage from './src/pages/Device/AddDevice';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <UIProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Entry"
          screenOptions={{
            headerStyle: {
              // height: 52,
            },
            headerTintColor: '#000000',

            headerTitleStyle: {
              fontSize: 14,
              alignItems: 'center',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Entry"
            component={EntryPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInPage}
            options={{title: 'PIN'}}
          />
          <Stack.Screen
            name="RegStep1"
            component={RegStep1}
            options={{title: 'Register'}}
          />
          <Stack.Screen
            name="RegStep2"
            component={RegStep2}
            options={{title: 'Register'}}
          />
          <Stack.Screen
            name="RegStep3"
            component={RegStep3}
            options={{title: 'Register'}}
          />
          <Stack.Screen
            name="RegSuccess"
            component={RegSuccess}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Setting"
            component={SettingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Device"
            component={DevicePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ScanDevice"
            component={ScanDevicePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddDevice"
            component={AddDevicePage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>

        {visible && (
          <AnimatedBootSplash
            onAnimationEnd={() => {
              setVisible(false);
            }}
          />
        )}
      </NavigationContainer>
    </UIProvider>
  );
}

export default App;
