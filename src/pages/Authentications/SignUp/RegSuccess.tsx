import React, {ReactNode} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Numpad from '../../../components/Numpad';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import RegSuccessImage from '../../../assets/images/register_success.png';
import ButtonContained from '../../../components/Buttons/ButtonContained';

interface Props {
  children?: ReactNode;
}

const RegSuccess: React.FC<Props> = ({children}) => {
  const navigation = useNavigation<any>();

  const [pin, setPin] = React.useState<string[]>([]);

  return (
    <View
      style={{
        flex: 1,

        width: '100%',
        height: '100%',
        padding: 18,
        gap: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <Image
        source={RegSuccessImage}
        style={{
          width: 195,
          height: 195,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 50,
        }}
      />

      <View style={{gap: 32, marginBottom: 32}}>
        <Text variant="titleMedium" style={{textAlign: 'center'}}>
          Successfully Create New Account
        </Text>
        <Text style={{color: '#505050', textAlign: 'center'}}>
          Please check your email to verify your account. To ensure the security
          of your information and to provide you with uninterrupted access to
          our services, we kindly request that you verify your email address.
        </Text>
      </View>

      <ButtonContained
        onPress={() => {
          navigation.navigate('Entry');
        }}
        label="LogIn"
      />
    </View>
  );
};

export default RegSuccess;
