import React from 'react';

import {Button, Text} from 'react-native-paper';

interface Props {
  onPress?: () => void;
  label?: string;
}

const ButtonElevated: React.FC<Props> = ({onPress, label = ''}) => {
  return (
    <Button
      onPress={onPress}
      mode="elevated"
      style={{
        borderColor: '#19BBDF',
        borderWidth: 1,
        paddingVertical: 6,
        borderRadius: 50,
        width: '100%',
      }}>
      <Text variant="labelLarge" style={{color: '#19BBDF'}}>
        {label}
      </Text>
    </Button>
  );
};

export default ButtonElevated;
