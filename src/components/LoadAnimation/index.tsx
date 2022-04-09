import React from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './styles';

import loadingCar from '../../assets/loadingCar.json';

const LoadAnimation: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
};

export default LoadAnimation;
