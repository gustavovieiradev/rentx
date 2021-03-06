import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../interfaces';
import CarDetails from '../screens/CarDetails';
import Home from '../screens/Home';
import MyCars from '../screens/MyCars';
import Scheduling from '../screens/Scheduling';
import SchedulingComplete from '../screens/SchedulingComplete';
import SchedulingDetails from '../screens/SchedulingDetails';
import Signin from '../screens/Signin';
import SignupFirstStep from '../screens/Signup/SignupFirstStep';
import SignupSecondStep from '../screens/Signup/SignupSecondStep';
import Splash from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Signin">
      <Screen name="Splash" component={Splash} />
      <Screen name="Signin" component={Signin} />
      <Screen name="SignupFirstStep" component={SignupFirstStep} />
      <Screen name="SignupSecondStep" component={SignupSecondStep} />
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};

export default StackRoutes;
