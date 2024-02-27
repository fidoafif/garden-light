import * as React from 'react';
import {BackHandler, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const useBackButton = (
  handler: (...params: any) => void = () => {},
  deps: React.DependencyList = [],
) => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        handler();
        return true;
      },
    );

    return () => {
      subscription.remove();
    };
  }, [...deps]);

  React.useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    if (Platform.OS === 'android') {
      unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
        if (e?.data?.action?.type === 'POP' && e?.preventDefault) {
          e.preventDefault();
          handler();
        }
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
};

export default useBackButton;
