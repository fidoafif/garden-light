import React from 'react';
import {View, Text, StyleSheet, ViewStyle, Image} from 'react-native';

import StepActiveIcon from '../../assets/icons/ic_step_active.png';
import StepInActiveIcon from '../../assets/icons/ic_step_inactive.png';
import StepCompleteIcon from '../../assets/icons/ic_step_complete.png';

interface StepperIndicatorProps {
  steps: string[];
  currentStep: number;
  containerStyle?: ViewStyle;
  dotStyle?: ViewStyle;
  activeDotStyle?: ViewStyle;
  textStyle?: ViewStyle;
}

const StepperIndicator: React.FC<StepperIndicatorProps> = ({
  steps,
  currentStep,
  containerStyle,
  dotStyle,
  activeDotStyle,
  textStyle,
}) => {
  const getDot = (index: number) => {
    if (index < currentStep) {
      return (
        <Image source={StepCompleteIcon} style={{width: 16, height: 16}} />
      );
    }
    if (index > currentStep) {
      return (
        <Image source={StepInActiveIcon} style={{width: 16, height: 16}} />
      );
    }
    return <Image source={StepActiveIcon} style={{width: 16, height: 16}} />;
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.container, {paddingHorizontal: 8}]}>
        {steps.map((step, index) => (
          <>
            <View key={index} style={styles.stepContainer}>
              <View
                style={[
                  styles.dot,
                  dotStyle,
                  index <= currentStep ? styles.activeDot : {},
                  index === steps.length - 1 ? styles.lastDot : {},
                ]}>
                {getDot(index)}
              </View>
            </View>
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.line,
                  index <= currentStep - 1 ? styles.activeLine : {},
                ]}
              />
            )}
          </>
        ))}
      </View>
      <View style={[styles.container]}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Text
              style={[
                styles.text,
                textStyle,
                index <= currentStep ? styles.activeText : {},
              ]}>
              {step}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepContainer: {
    alignItems: 'center',
  },
  dot: {
    borderRadius: 16,
    borderColor: '#FFFFFF',
  },
  activeDot: {
    borderColor: '#19BBDF',
  },
  lastDot: {
    marginBottom: 0,
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
  activeText: {
    fontSize: 12,
    color: '#19BBDF',
  },
  line: {
    flex: 1,
    width: '100%',
    height: 2,

    backgroundColor: '#E0E0E7',
  },
  activeLine: {
    backgroundColor: '#19BBDF',
  },
});

export default StepperIndicator;
