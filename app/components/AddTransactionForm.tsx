import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

import { buttonStyles } from "../styles/button";
import { shadows } from "../styles/shadows";
import { Account } from "../models/Account";
import { Dropdown } from "./Dropdown";

type AddATransactionFormProps = {
  accounts: Realm.Results<Account & Realm.Object>;
  onSubmit: (
    type: string,
    account: Account & Realm.Object,
    description: string,
    amount: number
  ) => void;
};

export const AddATransactionForm: React.FC<AddATransactionFormProps> = (
  props
) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState(null);
  const transactionTypes = [
    { label: "Expense", value: "expense" },
    { label: "Income", value: "income" },
    { label: "Transfer", value: "transfer" },
  ];

  const [selectedAccount, setSelectedAccount] = useState< Account & Realm.Object >(null);
  const [accountItems, setAccountItems] = useState< { label: string; value: Account & Realm.Object }[] >([]);

  useEffect(() => {
    const formattedAccounts = props.accounts.map((account) => ({
      label: account.name as string,
      value: account,
    }));
    setAccountItems(formattedAccounts);
  }, [props.accounts]);

  const handleSubmit = () => {
    const parasedAmount = parseFloat(amount);
    console.log("Selectd account:", selectedAccount);

    props.onSubmit(
      transactionType,
      selectedAccount,
      description,
      parasedAmount
    );
    setDescription("");
    setAmount("");
  };

  return (
    <View style={styles.form}>
      <Dropdown
        options={transactionTypes}
        onSelect={setTransactionType}
        placeholder="Select a transaction type"
      />
      <Dropdown
        options={accountItems}
        onSelect={setSelectedAccount}
        placeholder="Select an account"
      />
      <TextInput
        value={description}
        placeholder="Enter transaction description"
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <TextInput
        value={amount}
        placeholder="Enter transaction amount"
        onChangeText={setAmount}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>Add transaction</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: 50,
    marginBottom: 20,
    flexDirection: "column",
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
