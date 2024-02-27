import React, {ReactNode} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import {Avatar, Button, Text, TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {BaseRoute} from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';
import useHeader from '../../../hooks/useHeader';
import ButtonIcon from '../../../components/Buttons/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  SCREEN_WIDTH,
} from '@gorhom/bottom-sheet';
import ButtonContained from '../../../components/Buttons/ButtonContained';
import {ScrollView} from 'react-native-gesture-handler';
import ColorPicker, {
  BlueSlider,
  GreenSlider,
  HueSlider,
  OpacitySlider,
  Panel1,
  Panel2,
  Panel3,
  Panel4,
  Panel5,
  Preview,
  RedSlider,
  Swatches,
} from 'reanimated-color-picker';
import DeviceContainer from '../../../components/Cards/DeviceContainer';
import CInputText from '../../../components/Inputs/CInputText.tsx';
import ColorLightPanel from '../../../components/ColorLightPanel/index.tsx';
import LightBrightnessSlider from '../../../components/LightBrightnessSlider/index.tsx';
// import ColorPicker from 'react-native-wheel-color-picker';

interface Props {
  children?: ReactNode;
}

const AddDevicePage: React.FC<Props> = ({children}) => {
  const navigation = useNavigation<any>();

  const [currentColor, setCurrentColor] = React.useState('');
  const [hexCode, setHexCode] = React.useState<string>('');

  const goBack = () => {
    navigation.goBack();
  };

  useHeader({
    title: 'Add New Device',
    headerLeft: (
      <View style={{marginLeft: 16}}>
        <ButtonIcon icon="chevron_left" size={32} onPress={goBack} />
      </View>
    ),
  });

  const onColorChange = (color: string) => {
    console.info('onColorChange', color);
  };
  const onColorChangeComplete = (color: string) => {
    console.info('onColorChangeComplete', color);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        style={{flex: 1, margin: 16}}>
        <DeviceContainer
          device={{
            name: '',
            type: 'X5 | High Power Spotlighter',
            image:
              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH2klXdIdVaiuUnaxHKyWoDLNC-lKlqHRbTtAm-Yh-ElX5wvLd8rl4P561PbZLSJU9KFrtmrtfr2i41HRswpmGWFRUXwL2KIoWKpkaBDW1jowkVuaQ_iSidQ',
          }}
        />

        <FlatList
          data={[
            {
              id: 1,
              component: () => {
                return <ColorLightPanel />;
              },
            },
            {
              id: 2,
              component: () => {
                return <LightBrightnessSlider />;
              },
            },
          ]}
          renderItem={({item}) => {
            return (
              <View key={item.id} style={{width: 370}}>
                {item.component()}
              </View>
            );
          }}
          // contentContainerStyle={{width: SCREEN_WIDTH}}
          horizontal
        />
      </ScrollView>
      <View style={{margin: 16}}>
        <ButtonContained
          // onPress={handlePresentModalPress}
          label="Save Device"
        />
      </View>
    </View>
  );
};

export default AddDevicePage;
