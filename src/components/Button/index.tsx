import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

const Button: React.FC<Props> = ({ title, color, ...rest }) => {
  const theme = useTheme();

  return (
    <Container color={color || theme.colors.main} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
