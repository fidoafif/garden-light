import React, {ReactNode} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

import RegisterImage from '../../../assets/images/register.png';
import ButtonContained from '../../../components/Buttons/ButtonContained';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import StepperIndicator from '../../../components/StepperIndicator';
import CInputText from '../../../components/Inputs/CInputText.tsx';

interface Props {
  children?: ReactNode;
}

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const initialValues = {
  fullName: '',
  email: '',
};

const RegStep1: React.FC<Props> = ({children}) => {
  const navigation = useNavigation<any>();

  const onSubmit = (values: typeof initialValues) => {
    console.log('Form submitted with values:', values);
    navigation.navigate('RegStep2');
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#F9F9F9'}}>
      <View style={{paddingHorizontal: 42}}>
        <StepperIndicator
          steps={['User Data', 'New PIN', 'Confirm PIN']}
          currentStep={0}
          containerStyle={{marginVertical: 16}}
        />
      </View>
      <View style={{flex: 1, padding: 18, gap: 14}}>
        <Image
          source={RegisterImage}
          style={{
            width: 195,
            height: 195,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginVertical: 50,
          }}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={{flex: 1, gap: 14, alignItems: 'center'}}>
                <Text variant="titleMedium">Create Your Account</Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#3E3E3E',
                    marginBottom: 18,
                  }}>
                  Welcome to RGBW-5! We're thrilled to have you on board. To get
                  started, please fill out the form below and become part of our
                  vibrant community.
                </Text>

                <CInputText
                  label="Full Name"
                  value={values.fullName}
                  placeholder="Exp. John Evans"
                  handleChange={handleChange('fullName')}
                  error={errors.fullName}
                />

                <CInputText
                  label="Email"
                  value={values.email}
                  placeholder="Exp. mail@example.com"
                  handleChange={handleChange('email')}
                  error={errors.email}
                />
              </View>

              <ButtonContained
                onPress={() => {
                  navigation.navigate('RegStep2');
                }}
                label="Next"
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default RegStep1;
