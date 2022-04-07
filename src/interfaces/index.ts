import { CarDTO } from '../dtos/CarDto';

export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: undefined;
  SchedulingComplete: undefined;
  SchedulingDetails: undefined;
};
