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

interface CardContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

const CardContainer: React.FC<CardContainerProps> = ({children, style}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <LinearGradient
      colors={['#FFFFFF', '#0000000D']}
      // start={{x: 0.4, y: 0.0}}
      // end={{x: 0.42, y: 0.8}}
      style={[styles.linearGradient, style]}>
      <Shadow
        distance={0}
        // containerStyle={{marginVertical: 20}}
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
        <View style={[styles.card]}>{children}</View>
      </Shadow>
    </LinearGradient>
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
    padding: 8,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
});

export default CardContainer;
