import React from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';

interface Props {
  onPress?: () => void;
  icon?:
    | 'backspace'
    | 'edit'
    | 'edit_round'
    | 'logo'
    | 'plus'
    | 'plus_circle'
    | 'chevron_left'
    | 'setting'
    | 'x'
    | 'device';
  size?: number;
  style?: ViewStyle;
}

const ICONS = {
  backspace: require('../../assets/images/ic_backspace.png'),
  edit: require('../../assets/icons/ic_edit.png'),
  edit_round: require('../../assets/icons/ic_edit_round.png'),
  logo: require('../../assets/icons/ic_icon.png'),
  plus: require('../../assets/icons/ic_plus.png'),
  plus_circle: require('../../assets/icons/ic_plus_circle.png'),
  chevron_left: require('../../assets/icons/ic_chevron_left.png'),
  setting: require('../../assets/icons/ic_settings.png'),
  x: require('../../assets/icons/ic_x.png'),
  device: require('../../assets/icons/ic_4squar.png'),
};

const ButtonIcon: React.FC<Props> = ({
  onPress,
  icon = 'logo',
  size = 24,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image
        source={ICONS[icon]}
        style={{width: size, height: size, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
