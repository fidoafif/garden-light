import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import useHeader from '../../hooks/useHeader';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import CardContainer from '../../components/Cards/CardContainer';
import LinearGradient from 'react-native-linear-gradient';
import {BaseRoute} from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';

interface Props {
  children?: ReactNode;
}

const SettingPage: React.FC<Props> = ({children}) => {
  useHeader({
    title: 'Welcome',
    headerLeft: (
      <View style={{marginLeft: 16}}>
        <ButtonIcon icon="logo" size={32} onPress={() => {}} />
      </View>
    ),
    headerRight: (
      <View style={{marginRight: 16}}>
        <ButtonIcon icon="plus" onPress={() => {}} />
      </View>
    ),
  });

  return (
    <View style={{flex: 1, paddingHorizontal: 16, backgroundColor: '#FFFFFF'}}>
      <CardContainer style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 16}}>
          <View
            style={{borderColor: '#FFFFFF', borderWidth: 6, borderRadius: 50}}>
            <Avatar.Text size={45} label="L" />
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text variant="titleSmall">Hello Lisa</Text>
            <Text style={{color: '#989898'}}>Good Morning</Text>
          </View>
          <View>
            <LinearGradient
              colors={['#19BBDF', '#FFFFFF']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={{borderRadius: 50}}>
              <ButtonIcon icon="edit" />
            </LinearGradient>
          </View>
        </View>
      </CardContainer>
    </View>
  );
};

export default SettingPage;
