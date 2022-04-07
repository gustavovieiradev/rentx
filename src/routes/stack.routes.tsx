import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../interfaces';
import CarDetails from '../screens/CarDetails';
import Home from '../screens/Home';
import MyCars from '../screens/MyCars';
import Scheduling from '../screens/Scheduling';
import SchedulingComplete from '../screens/SchedulingComplete';
import SchedulingDetails from '../screens/SchedulingDetails';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};

export default StackRoutes;
