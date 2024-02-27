import React, {ReactNode} from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Shadow1 from '../../../assets/images/shadow_1.png';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import ColorPicker, {
  BlueSlider,
  GreenSlider,
  OpacitySlider,
  Panel3,
  RedSlider,
  Swatches,
} from 'reanimated-color-picker';
import CInputText from '../Inputs/CInputText.tsx';

interface ColorLightPanelProps {
  style?: ViewStyle;
  device?: {
    name: string;
    type: string;
    image?: string;
  };
}

const ColorLightPanel: React.FC<ColorLightPanelProps> = ({device, style}) => {
  const [hexCode, setHexCode] = React.useState<string>('');

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={{flex: 1, padding: 16, backgroundColor: '#FFFFFF'}}>
      <ColorPicker
        style={{
          width: '100%',
          gap: 16,
          // paddingHorizontal: 16,
          marginBottom: 24,
        }}
        value={`#${hexCode}`}
        onComplete={colors => {
          setHexCode(colors.hex);
          console.log(colors);
        }}>
        <View style={{paddingHorizontal: 32, marginBottom: 16}}>
          <Panel3 />
        </View>

        {/* <HueSlider /> */}
        <Swatches
          colors={[
            '#8AB1FD',
            '#A73292',
            '#FF2700',
            '#3FFF79',
            '#FFFFFF',
            '#E0F944',
          ]}
        />

        <View
          style={{
            marginBottom: 16,
            gap: 8,

            // width: SCREEN_WIDTH,
            // marginLeft: -16,
          }}>
          <Text variant="titleSmall">Intensity</Text>
          {/* <View style={{marginHorizontal: 8}}> */}
          <OpacitySlider
            thumbStyle={{width: 20, height: 20, marginTop: 0}}
            style={{borderWidth: 2, borderColor: '#000', height: 40}}
            sliderThickness={15}
            thumbSize={20}
          />
          {/* </View> */}
        </View>

        <CInputText
          label="HEX Code"
          value={hexCode}
          placeholder="Exp. FFFFFF"
          handleChange={setHexCode}
          // error={errors.code}
        />

        <View style={{marginBottom: 16, gap: 8}}>
          <Text variant="titleSmall">Red</Text>
          <RedSlider
            thumbStyle={{width: 20, height: 20, marginTop: 0}}
            style={{borderWidth: 2, borderColor: '#000', height: 40}}
            sliderThickness={15}
            thumbSize={20}
          />
        </View>
        <View style={{marginBottom: 16, gap: 8}}>
          <Text variant="titleSmall">Green</Text>
          <GreenSlider
            thumbStyle={{width: 20, height: 20, marginTop: 0}}
            style={{borderWidth: 2, borderColor: '#000', height: 40}}
            sliderThickness={15}
            thumbSize={20}
          />
        </View>
        <View style={{marginBottom: 16, gap: 8}}>
          <Text variant="titleSmall">Blue</Text>
          <BlueSlider
            thumbStyle={{width: 20, height: 20, marginTop: 0}}
            style={{borderWidth: 2, borderColor: '#000', height: 40}}
            sliderThickness={15}
            thumbSize={20}
          />
        </View>
      </ColorPicker>
    </ScrollView>
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

export default ColorLightPanel;
