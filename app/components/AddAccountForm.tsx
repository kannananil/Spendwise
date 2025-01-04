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
import DropDownPicker from 'react-native-dropdown-picker';

type AddAccountFormProps = {
  onSubmit: (name: string, description: string, type: string, balance: number) => void;
};

export const AddAccountForm: React.FC<AddAccountFormProps> = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState('');
  const [accountTypeDropDownOpen, setAccountTypeDropDownOpen] = useState(false);
  const [accountType, setAccountType] = useState(null);
  const [accountTypes, setAccountTypes] = useState([
    { label: 'Bank', value: 'bank' },
    { label: 'Credit Card', value: 'credit-card' },
    { label: 'Cash', value: 'cash' },
  ]);

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
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <TextInput
        value={description}
        placeholder='Enter account description'
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <TextInput
        value={balance}
        placeholder='Enter account initial balance'
        onChangeText={setBalance}
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.textInput}
      />
      <DropDownPicker
        open={accountTypeDropDownOpen}
        value={accountType}
        items={accountTypes}
        setOpen={setAccountTypeDropDownOpen}
        setValue={setAccountType}
        setItems={setAccountTypes}
        placeholder='Select account type'
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
