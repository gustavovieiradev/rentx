import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  InputText,
  ChangePasswordVisibiltyButton,
} from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface PasswordInput extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

const PasswordInput: React.FC<PasswordInput> = ({
  iconName,
  value,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }
  const theme = useTheme();

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
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
        {...rest}
        secureTextEntry={isPasswordVisible}
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
      />

      <ChangePasswordVisibiltyButton onPress={handlePasswordVisibilityChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </ChangePasswordVisibiltyButton>
    </Container>
  );
};

export default PasswordInput;
