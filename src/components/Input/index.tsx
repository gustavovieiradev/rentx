import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, InputText } from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const Input: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} />
    </Container>
  );
};

export default Input;
