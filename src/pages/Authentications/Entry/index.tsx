import React, {ReactNode} from 'react';
import {Image, View, ScrollView} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {withTheme} from 'react-native-paper';

import BoardingImage from '../../../assets/images/boarding.png';
import LogoIconImage from '../../../assets/images/icon.png';

import {useNavigation} from '@react-navigation/native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ButtonContained from '../../../components/Buttons/ButtonContained';
import ButtonElevated from '../../../components/Buttons/ButtonElevated';
import CInputText from '../../../components/Inputs/CInputText.tsx';

interface EntryPageProps {
  children?: ReactNode;
  theme: any;
}

const EntryPage: React.FC<EntryPageProps> = ({children, theme}) => {
  const navigation = useNavigation<any>();

  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const [email, setEmail] = React.useState('');

  // variables
  const snapPoints = React.useMemo(() => ['15%', '28%'], []);

  // callbacks
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          width: '100%',
          padding: 18,
          gap: 14,
        }}>
        <Image
          source={BoardingImage}
          style={{
            width: 350,
            height: 350,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginVertical: 50,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 8,
          }}>
          <Image
            source={LogoIconImage}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
          <Text style={{color: '#19BBDF', flex: 1}}>RGBW-5.0</Text>
        </View>

        <Text variant="titleLarge">Welcome to RGBW-5.0</Text>
        <Text style={{color: '#505050'}}>
          Brilliance at Your Fingertips: Discover the Future of Lighting with
          Smart Technology. Setting the Mood, Seamlessly, Elevate Your Space
          with Smart Light Control
        </Text>

        <ButtonContained onPress={handlePresentModalPress} label="LogIn" />

        <ButtonElevated
          onPress={() => {
            navigation.navigate('RegStep1');
          }}
          label="Register"
        />

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View
              style={{
                flex: 1,
                gap: 16,
                paddingHorizontal: 16,
                alignItems: 'center',
              }}>
              <Text>Login</Text>

              <CInputText
                label="Email"
                value={email}
                placeholder="Exp. mail@example.com"
                handleChange={setEmail}
                // error={errors.email}
              />

              <ButtonContained
                onPress={() => {
                  navigation.navigate('SignIn');
                  bottomSheetModalRef.current?.dismiss();
                }}
                label="LogIn"
              />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </ScrollView>
  );
};

export default withTheme(EntryPage);
