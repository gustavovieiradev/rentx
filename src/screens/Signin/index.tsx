import React from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';

import { Container, Footer, Form, Header, SubTitle, Title } from './styles';

const Signin: React.FC = () => {
  const theme = useTheme();
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <Title>
              Estamos {'\n'}
              quase lá
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Form>

          <Footer>
            <Button title="Login" />
            <Button
              title="Criar conta gratuita"
              light
              color={theme.colors.background_secundary}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;
