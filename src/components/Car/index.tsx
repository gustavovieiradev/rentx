import React from 'react';

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

interface Props {
  data: CardData;
}

const Car: React.FC<Props> = ({ data }) => {
  return (
    <Container>
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
