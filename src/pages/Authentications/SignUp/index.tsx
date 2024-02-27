import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

interface SignInPageProps {
  children?: ReactNode;
}

const SignUpPage: React.FC<SignInPageProps> = ({children}) => {
  return <View style={{padding: 18, gap: 14}}></View>;
};

export default SignUpPage;
