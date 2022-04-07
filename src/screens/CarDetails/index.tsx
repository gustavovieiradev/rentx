import React from 'react';
import Accessory from '../../components/Accessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';
import Button from '../../components/Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

type CarDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

type CarDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CarDetails'>;

const CarDetails: React.FC = () => {
  const navigation = useNavigation<CarDetailsScreenProp>();

  const route = useRoute<CarDetailsScreenRouteProp>();

  const { car } = route.params;

  function handleBack() {
    navigation.goBack();
  }

  function handleConfirmDetail(): void {
    navigation.navigate('Scheduling', { car });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolha o período do aluguel"
          onPress={handleConfirmDetail}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
