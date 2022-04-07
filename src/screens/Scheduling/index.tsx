import React, { useState } from 'react';
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
import Calendar, { MarkedDateProps } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';
import { DateData } from 'react-native-calendars';
import { generateInterval } from '../../components/Calendar/generateInterval';

type SchedulingScreenProp = StackNavigationProp<
  RootStackParamList,
  'Scheduling'
>;

const Scheduling: React.FC = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const navigation = useNavigation<SchedulingScreenProp>();
  function handleConfirmDetail(): void {
    navigation.navigate('SchedulingDetails');
  }
  const theme = useTheme();
  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);

    console.log(interval);

    setMarkedDates(interval);
  }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
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
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmDetail} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
