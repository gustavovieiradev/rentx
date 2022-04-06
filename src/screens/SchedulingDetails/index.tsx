import React from 'react';
import { Feather } from '@expo/vector-icons';
import Accessory from '../../components/Accessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import Button from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';

type SchedulingDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  'SchedulingDetails'
>;

const SchedulingDetails: React.FC = () => {
  const navigation = useNavigation<SchedulingDetailsScreenProp>();
  function handleConfirmDetail(): void {
    navigation.navigate('SchedulingComplete');
  }
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://mediaservice.audi.com/media/live/50780/n3c01/f5frxa-1/2022/14%2B2y2y/56%2Bub/aaue0a/abo6h0/aed7ib/aer0p6/agm0gb/ahv1d0/aib4ue/algqe1/ase6xl/asl5sl/asr5ru/asy0k0/ata1x1/ausa8f/awv6k0/bah1kr/bav1lx/bbo6ft/blbb1d/cha2h1/cpciv9/cpdiw0/ctxgw0/dae2mc/dar3s0/dei3fb/dekgt6/dfo6f6/eih5tl/eilvt3/eph7x2/esi7w0/fad0fa/feu6a2/fhwvf1/fls8k4/fsbuh2/fsp5l1/fvs7g0/fzsf0a/gmotv8/gra8t8/grtvc0/gspg1g/heb6v3/hes5j8/him6nq/his3nt/hka9aq/hsw8iz/hudks1/insu5a/irs4l6/kark8r/kasqk1/kds4h3/kms4d0/kov5zf/krs1a2/ksa5c0/ksi3g0/ksuka2/kzv6w6/lcpqq2/ldgfu0/leal0l/ler3h0/lia8g4/lor8i6/lra2pf/lrvav1/lse9vs/lum7he/mas6e3/mdsfn1/mfa7j3/mku8z4/moaix1/motd4d/nav7ug/nnnfz1/pamgp1/rad46a/rau9je/rcoer2/reih59/relv0a/rer1g8/sab4x3/sbr8vp/scrfk0/sctql1/sdh4e7/sfsvj3/sfz2f0/sgk9p3/sibn5t/sie3l4/sih4a0/siz1qn/sna7l7/son5xk/spu7y1/srh6i3/ssh4kc/ssr3y0/swr8x1/tge6jd/tkv4f2/tpg9b0/tplb41/tveqv0/twl1vh/twu1sb/typ1ey/tyz2z7/vbk1t2/vosq4q/vtv9zx/wal9tk/win7s0/wss4gf/zbr2wa/zfm0tp/zie4zl/zks6ea/zkv3b3/zss0rz/zuh9m0.jpeg?wid=1920',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Brand</Brand>
            <Name>Name</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 hp" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>01/01/2000</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>01/01/2000</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 3x diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora!"
          color={theme.colors.success}
          onPress={handleConfirmDetail}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
