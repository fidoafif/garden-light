import React, {ReactNode} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '.';

interface UIProviderProps {
  children: ReactNode;
}

const UIProvider: React.FC<UIProviderProps> = ({children}) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default UIProvider;
