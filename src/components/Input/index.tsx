import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, InputText } from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const Input: React.FC<InputProps> = ({ iconName, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
      />
    </Container>
  );
};

export default Input;
