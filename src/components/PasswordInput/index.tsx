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
}

const PasswordInput: React.FC<PasswordInput> = ({ iconName, ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const theme = useTheme();

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={isPasswordVisible} />

      <ChangePasswordVisibiltyButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
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
