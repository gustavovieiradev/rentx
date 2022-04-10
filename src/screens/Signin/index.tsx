import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import * as Yup from 'yup';

import { Container, Footer, Form, Header, SubTitle, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';

type SigninScreenProp = StackNavigationProp<RootStackParamList, 'Signin'>;

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const navigation = useNavigation<SigninScreenProp>();

  async function handleSignin() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha é obtrigatória'),
      });

      await schema.validate({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Alert.alert('Opa', err.message);
      }

      return Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer o login'
      );
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignupFirstStep');
  }

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
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button title="Login" onPress={handleSignin} />
            <Button
              title="Criar conta gratuita"
              onPress={handleNewAccount}
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
