import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { buttonStyles } from '../styles/button';
import { shadows } from '../styles/shadows';
import { Dropdown } from './Dropdown';
import { useThemedStyles } from '../hooks/useThemedStyles';

type AddAccountFormProps = {
  onSubmit: (name: string, description: string, type: string, balance: number) => void;
};

export const AddAccountForm: React.FC<AddAccountFormProps> = (props) => {
  const { colors } = useTheme();

  const styles = useThemedStyles((colors) => ({
    form: {
      height: 50,
      marginBottom: 20,
      flexDirection: "column",
      backgroundColor: colors.background,
      ...shadows,
    },
    textInput: {
      padding: 12,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 8,
      backgroundColor: colors.inputBackground,
      marginVertical: 3,
      fontSize: 16,
      color: colors.text,
    },
    submit: {
      ...buttonStyles.button,
      width: 150,
      height: "100%",
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginLeft: 20,
      marginRight: 0,
      backgroundColor: colors.card,
    },
    button: {
      ...buttonStyles.text,
      color: colors.text,
    },
  }));
  
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
    <View style={styles.form}>
      <TextInput
        value={name}
        placeholder='Enter account name'
        placeholderTextColor={colors.inputText}
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <TextInput
        value={description}
        placeholder='Enter account description'
        placeholderTextColor={colors.inputText}
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <TextInput
        value={balance}
        placeholder='Enter account initial balance'
        placeholderTextColor={colors.inputText}
        onChangeText={setBalance}
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <Dropdown
        options={accountTypes}
        onSelect={setAccountType}
        placeholder='Select account type'
      />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.button}>Add account</Text>
      </Pressable>
    </View>
  );
};
