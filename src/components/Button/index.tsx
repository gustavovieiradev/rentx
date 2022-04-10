import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  color,
  loading = false,
  enabled = true,
  light = false,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Container
      color={color || theme.colors.main}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
