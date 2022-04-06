import React from 'react';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { StatusBar, Text } from 'react-native';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';

type SchedulingScreenProp = StackNavigationProp<
  RootStackParamList,
  'Scheduling'
>;

const Scheduling: React.FC = () => {
  const navigation = useNavigation<SchedulingScreenProp>();
  function handleConfirmDetail(): void {
    navigation.navigate('SchedulingDetails');
  }
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo selected={false}>
            <DateTitle>DE</DateTitle>
            <DateValue>04/04/2022</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo selected={false}>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>04/04/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmDetail} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
