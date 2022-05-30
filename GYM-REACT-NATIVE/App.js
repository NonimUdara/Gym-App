import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Message from './Screens/Message';
import ComeandLeave from './Screens/ComeandLeave';
import Requests from './Screens/Requests';
import BMICalculator from './Screens/BMICalculator';
import Profile from './Screens/Profile';
import Shedules from './Screens/Shedules';
import Males from './Screens/Males';
import Females from './Screens/Females';
import Strength from './Screens/Strength';
import Cardio from './Screens/Cardio';
import Circuit from './Screens/Circuit';
import Error from './Screens/Error';
import ToastBanner from './Screens/ToastBanner';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="ComeandLeave" component={ComeandLeave} />
        <Stack.Screen name="Requests" component={Requests} />
        <Stack.Screen name="BMICalculator" component={BMICalculator} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Shedules" component={Shedules} />
        <Stack.Screen name="Males" component={Males} />
        <Stack.Screen name="Females" component={Females} />
        <Stack.Screen name="Strength" component={Strength} />
        <Stack.Screen name="Cardio" component={Cardio} />
        <Stack.Screen name="Circuit" component={Circuit} />
        <Stack.Screen name="Error" component={Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;