import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import ButtonIcon from '../Buttons/ButtonIcon';

interface NumpadProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onResetPIN?: () => void;
}

const Numpad: React.FC<NumpadProps> = ({
  onKeyPress,
  onBackspace,
  onResetPIN,
}) => {
  const handlePress = (key: string) => {
    onKeyPress(key);
  };

  return (
    <View style={styles.container}>
      {Boolean(onResetPIN) && (
        <View style={styles.row}>
          <Button onPress={onResetPIN}>
            <Text variant="labelSmall" style={{color: '#19BBDF'}}>
              Reset PIN?
            </Text>
          </Button>
        </View>
      )}
      <View style={styles.row}>
        <Pad value="1" onKeyPress={handlePress} />
        <Pad value="2" onKeyPress={handlePress} />
        <Pad value="3" onKeyPress={handlePress} />
      </View>
      <View style={styles.row}>
        <Pad value="4" onKeyPress={handlePress} />
        <Pad value="5" onKeyPress={handlePress} />
        <Pad value="6" onKeyPress={handlePress} />
      </View>
      <View style={styles.row}>
        <Pad value="7" onKeyPress={handlePress} />
        <Pad value="8" onKeyPress={handlePress} />
        <Pad value="9" onKeyPress={handlePress} />
      </View>
      <View style={styles.row}>
        <View style={styles.button} />
        <Pad value="0" onKeyPress={handlePress} />
        <View style={styles.button}>
          <ButtonIcon icon="backspace" onPress={onBackspace} />
        </View>
      </View>
    </View>
  );
};

const Pad: React.FC<{value: string; onKeyPress: (value: string) => void}> = ({
  value,
  onKeyPress,
}) => {
  const handlePress = () => {
    onKeyPress(value);
  };

  return (
    <Button mode="text" onPress={handlePress}>
      <Text variant="titleLarge">{value}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  row: {
    flexDirection: 'row',
    gap: 54,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 50,
  },
});

export default Numpad;
