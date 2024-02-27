import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import useHeader from '../../hooks/useHeader';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import CardContainer from '../../components/Cards/CardContainer';
import LinearGradient from 'react-native-linear-gradient';
import {BaseRoute} from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';
import {useNavigation} from '@react-navigation/native';

interface Props {
  children?: ReactNode;
}

const HomePage: React.FC<Props> = ({children}) => {
  const navigation = useNavigation<any>();

  const goScanDevice = () => {
    navigation.navigate('ScanDevice');
  };

  useHeader({
    title: 'Welcome',
    headerLeft: (
      <View style={{marginLeft: 16}}>
        <ButtonIcon icon="logo" size={32} onPress={() => {}} />
      </View>
    ),
    headerRight: (
      <View style={{marginRight: 16}}>
        <ButtonIcon icon="plus" onPress={goScanDevice} />
      </View>
    ),
  });

  return (
    <View style={{flex: 1, paddingHorizontal: 16, backgroundColor: '#F8F8F8'}}>
      <CardContainer style={{marginTop: 16}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 16}}>
          <View
            style={{borderColor: '#FFFFFF', borderWidth: 6, borderRadius: 50}}>
            <Avatar.Text size={45} label="L" />
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text variant="titleSmall">Hello Lisa</Text>
            <Text style={{color: '#989898'}}>Good Morning</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <ButtonIcon icon="edit_round" size={48} />
          </View>
        </View>
      </CardContainer>

      <EmptyState onPress={goScanDevice} />
    </View>
  );
};

const EmptyState = ({onPress}: {onPress: () => void}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 26,
      }}>
      <ButtonIcon icon="plus_circle" size={150} onPress={onPress} />
      <Text variant="titleLarge" style={{fontWeight: '700', color: '#19BBDF'}}>
        Add Device
      </Text>
    </View>
  );
};

export default HomePage;
