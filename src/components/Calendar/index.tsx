import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { ptBr } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBr;

LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (date: DateData) => void;
}

const Calendar: React.FC<CalendarProps> = ({ markedDates, onDayPress }) => {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secundary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.secundary_600,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    ></CustomCalendar>
  );
};

export default Calendar;
