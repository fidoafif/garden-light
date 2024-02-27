import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Numpad from '../../../components/Numpad';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import StepperIndicator from '../../../components/StepperIndicator';

interface Props {
  children?: ReactNode;
}

const RegStep3: React.FC<Props> = ({children}) => {
  const navigation = useNavigation<any>();

  const [pin, setPin] = React.useState<string[]>([]);

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View style={{paddingHorizontal: 42}}>
        <StepperIndicator
          steps={['User Data', 'New PIN', 'Confirm PIN']}
          currentStep={2}
          containerStyle={{marginVertical: 16}}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,

          alignItems: 'center',
        }}>
        <View style={{flex: 1, gap: 14, alignItems: 'center'}}>
          <Text variant="titleSmall">Confirm your PIN</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {_.take([...pin, ...Array(4 - pin.length).fill('')], 4).map(
              (digit, index) => (
                <View
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 5,
                  }}>
                  {digit ? (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#19BBDF',
                        borderRadius: 50,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#CBCBCB',
                        borderRadius: 50,
                      }}
                    />
                  )}
                </View>
              ),
            )}
          </View>
        </View>

        <View style={{flex: 1, paddingBottom: 32}}>
          <Numpad
            onKeyPress={key => {
              if (pin.length < 3) {
                return setPin(prevPin => [...prevPin, key]);
              }

              navigation.navigate('RegSuccess');
            }}
            onBackspace={() => {
              setPin(prevPin => prevPin.slice(0, -1));
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default RegStep3;
