import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';

import {buttonStyles} from '../styles/button';
import colors from '../styles/colors';
import {shadows} from '../styles/shadows';
import { Dropdown } from './Dropdown';

type AddAccountFormProps = {
  onSubmit: (name: string, description: string, type: string, balance: number) => void;
};

export const AddAccountForm: React.FC<AddAccountFormProps> = (props) => {
  const { colors } = useTheme();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState('');
  const [accountType, setAccountType] = useState(null);
  const accountTypes = [
    { label: 'Bank', value: 'bank' },
    { label: 'Credit Card', value: 'credit-card' },
    { label: 'Cash', value: 'cash' },
  ];

  const handleSubmit = () => {
    const parasedBalance = parseFloat(balance);
    props.onSubmit(name, description, accountType, parasedBalance);
    setName('');
    setDescription('');
    setBalance('');
  };

  return (
    <View style={[styles.form, { backgroundColor: colors.background }]}>
      <TextInput
        value={name}
        placeholder='Enter account name'
        placeholderTextColor={colors.inputText}
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize='none'
        style={[styles.textInput, {
          backgroundColor: colors.inputBackground,
          color: colors.text,
          borderColor: colors.inputBorder
        }]}
      />
      <TextInput
        value={description}
        placeholder='Enter account description'
        placeholderTextColor={colors.inputText}
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize='none'
        style={[styles.textInput, {
          backgroundColor: colors.inputBackground,
          color: colors.text,
          borderColor: colors.inputBorder
        }]}
      />
      <TextInput
        value={balance}
        placeholder='Enter account initial balance'
        placeholderTextColor={colors.inputText}
        onChangeText={setBalance}
        autoCorrect={false}
        autoCapitalize='none'
        style={[styles.textInput, {
          backgroundColor: colors.inputBackground,
          color: colors.text,
          borderColor: colors.inputBorder
        }]}
      />
      <Dropdown
        options={accountTypes}
        onSelect={setAccountType}
        placeholder='Select account type'
      />
      <Pressable onPress={handleSubmit} style={[styles.submit, { backgroundColor: colors.card }]}>
        <Text style={[styles.icon, { color: colors.text }]}>Add account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: 50,
    marginBottom: 20,
    flexDirection: 'column',
    ...shadows,
  },
  textInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginVertical: 3,
    fontSize: 16,
    color: '#333',
  },
  submit: {
    ...buttonStyles.button,
    width: 150,
    height: "100%",
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginLeft: 20,
    marginRight: 0,
  },
  icon: {
    ...buttonStyles.text,
  },
});
