import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import VerticalSlider from 'rn-vertical-slider';

const LightBrightnessSlider = () => {
  const [value, setValue] = useState(50);

  //   const handleBrightnessChange = value => {
  //     setBrightness(value);
  //     // You can implement logic to adjust the light brightness here
  //   };

  return (
    <View
      style={{
        marginTop: 16,
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text variant="titleMedium">Brightness</Text>
      <Text variant="bodyMedium">{`${value}%`}</Text>
      <View
        style={{
          padding: 4,
          //   backgroundColor: '#F8F8F8',
          borderRadius: 50,
          shadowColor: '#F8F8F8',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.36,
          shadowRadius: 8,

          elevation: 11,
        }}>
        <VerticalSlider
          value={value}
          onChange={value => setValue(value)}
          height={400}
          width={85}
          step={1}
          min={0}
          max={100}
          borderRadius={50}
          minimumTrackTintColor="#ACF0FF"
          maximumTrackTintColor="#F9F9F9"
          containerStyle={{
            borderRadius: 50,
            shadowColor: '#F8F8F8',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.36,
            shadowRadius: 8,

            elevation: 11,
          }}

          // showBallIndicator
          // ballIndicatorColor="#ACF0FF"
          // ballIndicatorTextColor="#fff"
          // ballIndicatorWidth={80}
          // ballIndicatorHeight={40}
        />
      </View>
    </View>
  );
};

export default LightBrightnessSlider;
