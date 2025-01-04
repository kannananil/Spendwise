import React, {useEffect, useState} from 'react';
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
import { Account } from '../models/Account';

type AddATransactionFormProps = {
  accounts: Realm.Results<Account & Realm.Object>;
  onSubmit: (type: string, account: Account & Realm.Object, description: string, amount: number) => void;
};

export const AddATransactionForm: React.FC<AddATransactionFormProps> = (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionTypeDropDownOpen, setTransactionTypeDropDownOpen] = useState(false);
  const [transactionType, setTransactionType] = useState(null);
  const [transactionTypes, setTransactionTypes] = useState([
    { label: 'Expense', value: 'expense' },
    { label: 'Income', value: 'income' },
    { label: 'Transfer', value: 'transfer' },
  ]);

  const [accountDropDownOpen, setAccountDropDownOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Account & Realm.Object>(null);
  const [accountItems, setAccountItems] = useState<{ label: string; value: Account & Realm.Object }[]>([]);

  useEffect(() => {
    const formattedAccounts = props.accounts.map((account) => ({
      label: account.name as string,
      value: account,
    }));
    setAccountItems(formattedAccounts);
  }, [props.accounts]);

  const handleSubmit = () => {
    const parasedAmount = parseFloat(amount);
    console.log('Selectd account:', selectedAccount);
    
    props.onSubmit(transactionType, selectedAccount, description, parasedAmount);
    setDescription('');
    setAmount('');
  };

  return (
    <View style={styles.form}>
      <DropDownPicker
        open={transactionTypeDropDownOpen}
        value={transactionType}
        items={transactionTypes}
        setOpen={setTransactionTypeDropDownOpen}
        setValue={setTransactionType}
        setItems={setTransactionTypes}
        placeholder="Select a transaction type"
      />
      <DropDownPicker
        open={accountDropDownOpen}
        value={selectedAccount}
        items={accountItems}
        setOpen={setAccountDropDownOpen}
        setValue={setSelectedAccount}
        setItems={setAccountItems}
        placeholder="Select an account"
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
        value={amount}
        placeholder="Enter account initial balance"
        onChangeText={setAmount}
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
