import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';

import { Container, Footer, Header, SubTitle, Title } from './styles';

const Signin: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>
          Estamos {'\n'}
          quase lá
        </Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível
        </SubTitle>
      </Header>

      <Footer>
        <Button title="Login" />
        <Button
          title="Criar conta gratuita"
          light
          color={theme.colors.background_secundary}
        />
      </Footer>
    </Container>
  );
};

export default Signin;
