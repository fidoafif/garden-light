import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import useBackButton from '../useBackButton';
import {Button, Text} from 'react-native-paper';
import ButtonIcon from '../../components/Buttons/ButtonIcon';

interface IHeader {
  testID?: {
    headerLeft?: string;
    headerTitle?: string;
  };
  title?: string;
  onPressLeft?: () => void;
  headerRight?: React.ReactElement;
  variant?: 'back' | 'close';
  deps?: React.DependencyList;
  headerLeft?: React.ReactElement;
  headerCenter?: React.ReactElement;
  headerStyle?: any;
  headerTransparent?: boolean;
}

interface IHeaderLeft {
  onBack?: () => void;
  variant?: 'back' | 'close';
  testID?: string;
}

const HeaderLeft = ({onBack, variant, testID}: IHeaderLeft) => {
  return <ButtonIcon icon="chevron_left" onPress={onBack} />;
};

const useHeader = ({
  testID = {
    headerLeft: '',
    headerTitle: '',
  },
  title,
  onPressLeft,
  headerRight,
  variant = 'close',
  deps = [],
  headerLeft,
  headerCenter,
  headerStyle,
  headerTransparent = false,
}: IHeader) => {
  const navigation = useNavigation();

  const titleText = title || '';

  const onBack = (): void => {
    onPressLeft ? onPressLeft() : navigation.goBack();
  };

  useBackButton(onBack, deps);

  const renderHeaderLeft = () => {
    if (headerLeft) {
      return headerLeft;
    }
    return (
      <HeaderLeft
        testID={testID?.headerLeft}
        variant={variant}
        onBack={onBack}
      />
    );
  };

  const renderHeaderCenter = () => {
    if (title) {
      return <Text variant="titleMedium">{titleText}</Text>;
    }
    return headerCenter;
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: headerTransparent,
      headerTitle: () => renderHeaderCenter(),
      headerStyle: {...headerStyle},
      headerTitleAlign: 'center',
      headerLeft: () => renderHeaderLeft(),
      headerRight: () => headerRight,
    });
  }, [...deps, {...headerStyle}]);
};

export default useHeader;
