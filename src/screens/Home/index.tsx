import {
  CompositeNavigationProp,
  CompositeScreenProps,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import Load from '../../components/Load';
import { CarDTO } from '../../dtos/CarDto';
import { RootStackParamList } from '../../interfaces';
import api from '../../services/api';

import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<HomeScreenProp>();
  function handleCarDetails(car: CarDTO): void {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
