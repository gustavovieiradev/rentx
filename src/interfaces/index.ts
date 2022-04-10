import { CarDTO } from '../dtos/CarDto';

export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  SchedulingComplete: undefined;
  MyCars: undefined;
  Splash: undefined;
  Signin: undefined;
  SignupFirstStep: undefined;
  SignupSecondStep: {
    user: { name: string; email: string; driverLicense: string };
  };
};
