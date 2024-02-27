import React, {ChangeEvent, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  handleChange: (value: string) => void;
}

const CInputText: React.FC<Props> = ({
  label = '',
  value = '',
  placeholder = '',
  error = '',
  handleChange,
}) => {
  return (
    <View style={{width: '100%', gap: 16}}>
      {Boolean(label) && <Text variant="labelLarge">{label}</Text>}
      {Boolean(error) && (
        <Text variant="labelSmall" style={{color: '#FF0000'}}>
          {error}
        </Text>
      )}
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChange}
        style={{
          width: '100%',
          backgroundColor: '#F9F9F9',
        }}
        underlineColor={'#19BBDF'}
        activeUnderlineColor={'#19BBDF'}
        placeholderTextColor={'#B8B8B8'}
        contentStyle={{fontSize: 12}}
        error={Boolean(error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pinDigit: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

export default CInputText;
