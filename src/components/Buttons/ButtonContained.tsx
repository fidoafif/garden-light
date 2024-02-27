import React from 'react';

import {Button, Text} from 'react-native-paper';

interface Props {
  onPress?: () => void;
  label?: string;
}

const ButtonContained: React.FC<Props> = ({onPress, label = ''}) => {
  return (
    <Button
      onPress={onPress}
      mode="contained"
      style={{
        backgroundColor: '#19BBDF',
        paddingVertical: 6,
        borderRadius: 50,
        width: '100%',
      }}>
      <Text variant="labelLarge" style={{color: '#FFFFFF'}}>
        {label}
      </Text>
    </Button>
  );
};

export default ButtonContained;
