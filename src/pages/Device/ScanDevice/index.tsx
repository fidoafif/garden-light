import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Text, TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {BaseRoute} from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';
import useHeader from '../../../hooks/useHeader';
import ButtonIcon from '../../../components/Buttons/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ButtonContained from '../../../components/Buttons/ButtonContained';
import {ScrollView} from 'react-native-gesture-handler';
import CInputText from '../../../components/Inputs/CInputText.tsx';

interface Props {
  children?: ReactNode;
}

const ScanDevicePage: React.FC<Props> = ({children}) => {
  const navigation = useNavigation<any>();

  const {hasPermission, requestPermission} = useCameraPermission();

  const device = useCameraDevice('back');

  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const [code, setCode] = React.useState('');

  // variables
  const snapPoints = React.useMemo(() => ['15%', '28%'], []);

  // callbacks
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  useHeader({
    headerTransparent: true,
    headerLeft: (
      <View style={{marginLeft: 16}}>
        <ButtonIcon
          icon="x"
          size={24}
          onPress={goBack}
          style={{padding: 4, backgroundColor: '#404040', borderRadius: 50}}
        />
      </View>
    ),
    // headerRight: (
    //   <View style={{marginRight: 16}}>
    //     <ButtonIcon icon="plus" onPress={() => {}} />
    //   </View>
    // ),
  });

  if (device == null) return;
  <NoCameraDeviceError />;

  const initCamera = async () => {
    if (!hasPermission) {
      const granted = await requestPermission();
      console.log(granted);
    }
  };

  React.useEffect(() => {
    initCamera();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}></Camera>

        <View
          style={{
            backgroundColor: 'transparent',
            width: 233,
            height: 338,
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'white',
            borderStyle: 'dashed',
            zIndex: 1111,
          }}
        />

        <View style={{width: '100%', marginTop: 80, paddingHorizontal: 44}}>
          <ButtonContained
            onPress={handlePresentModalPress}
            label="Manually Enter"
          />
        </View>
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
              <Text>Manually Add Device</Text>

              <CInputText
                label="Enter Device Code"
                value={code}
                placeholder="Exp. 123412332123444"
                handleChange={setCode}
                // error={errors.code}
              />

              <ButtonContained
                onPress={() => {
                  navigation.replace('AddDevice', {code});
                  bottomSheetModalRef.current?.dismiss();
                }}
                label="Search"
              />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </ScrollView>
  );
};

const NoCameraDeviceError = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>No Camera Found</Text>
    </View>
  );
};

export default ScanDevicePage;
