import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Name,
  Brand,
  About,
  Rent,
  Period,
  Type,
  CarImage,
  Price,
} from './styles';

interface CardData {
  brand: string;
  name: string;
  rent: {
    price: number;
    period: string;
  };
  thumbnail: string;
}

interface Props extends RectButtonProps {
  data: CardData;
}

const Car: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>R$ {data.rent.price}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
};

export default Car;
