import React from 'react';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import { StatusBar, useWindowDimensions } from 'react-native';
import ConfirmButton from '../../components/ConfirmButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';

type SchedulingCompleteScreenProp = StackNavigationProp<
  RootStackParamList,
  'SchedulingDetails'
>;

const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<SchedulingCompleteScreenProp>();
  function handleConfirmDetail(): void {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirmDetail} />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
