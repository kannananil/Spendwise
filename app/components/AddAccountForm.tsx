import React, {useState} from 'react';
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

type AddAccountFormProps = {
  onSubmit: (name: string, description: string, balance: number) => void;
};

export const AddAccountForm: React.FC<AddAccountFormProps> = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = () => {
    const parasedBalance = parseFloat(balance);
    onSubmit(name, description, parasedBalance);
    setName('');
    setDescription('');
    setBalance('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={name}
        placeholder="Enter account name"
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <TextInput
        value={description}
        placeholder="Enter account description"
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <TextInput
        value={balance}
        placeholder="Enter account initial balance"
        onChangeText={setBalance}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: 50,
    marginBottom: 20,
    // marginTop: 20,
    flexDirection: 'column',
    ...shadows,
  },
  textInput: {
    // flex: 1,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
  },
  submit: {
    ...buttonStyles.button,
    width: 50,
    height: '100%',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginLeft: 20,
    marginRight: 0,
  },
  icon: {
    ...buttonStyles.text,
  },
});
