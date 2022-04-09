import React, { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container } from './styles';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';

type SplashScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const Splash: React.FC = () => {
  const splashAnimation = useSharedValue(0);

  const navigation = useNavigation<SplashScreenProp>();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50],
        [1, 0.3, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50],
        [0, 0.3, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  function startApp() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={brandStyle}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={logoStyle}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
