import React from 'react';
import BackButton from '../../components/BackButton';

import { Container, Header } from './styles';

const CardDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
    </Container>
  );
};

export default CardDetails;
