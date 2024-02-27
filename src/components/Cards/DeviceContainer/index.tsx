import React, {ReactNode} from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import Shadow1 from '../../../assets/images/shadow_1.png';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import CInputText from '../../Inputs/CInputText.tsx';

interface DeviceContainerProps {
  style?: ViewStyle;
  device?: {
    name: string;
    type: string;
    image?: string;
  };
}

const DeviceContainer: React.FC<DeviceContainerProps> = ({device, style}) => {
  const [name, setName] = React.useState<string>(device?.name || '');
  const [type, setType] = React.useState<string>(device?.type || '');

  return (
    <View style={{gap: 12, marginBottom: 16}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{gap: 8}}>
          <Text variant="titleSmall">Device Type</Text>
          <Text variant="bodySmall" style={{color: '#989898'}}>
            {device?.type}
          </Text>
        </View>

        {Boolean(device?.image) && (
          <Shadow
            distance={0}
            startColor={'#FFF'}
            endColor={'#F8F8F8'}
            offset={[2, 3]}
            paintInside={false}
            sides={{
              start: true,
              end: true,
              bottom: true,
              top: true,
            }}
            corners={{
              topStart: true,
              topEnd: true,
              bottomStart: true,
              bottomEnd: true,
            }}
            style={[styles.card]}>
            <Image
              source={{
                uri: device?.image,
              }}
              resizeMode="contain"
              style={{width: 40, height: 40, borderRadius: 50, padding: 4}}
            />
          </Shadow>
        )}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CInputText
          label="Device Name"
          value={name}
          placeholder="Exp. Garden Wall 1"
          handleChange={setName}
          // error={errors.code}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    padding: 3,
    borderRadius: 12,

    shadowColor: '#F8F8F8',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.36,
    shadowRadius: 8,

    elevation: 11,
  },
  card: {
    borderColor: '#F8F8F8',
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 6,
    backgroundColor: '#FFF',
  },
});

export default DeviceContainer;
