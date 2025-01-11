import React, { useCallback } from "react";

import { Transaction } from "../models/Transaction";

import { useQuery, useRealm } from "@realm/react";
import TransactionList from "../components/TransactionList";
import { AddATransactionForm } from "../components/AddTransactionForm";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Account } from "../models/Account";
import { theme } from '../styles/theme';

export const Home = () => {
  const realm = useRealm();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  
  const handleAddTransaction = useCallback(
    (type: string, account: Account & Realm.Object, description: string, amount: number): void => {
      console.log(type, account, description, amount);
      realm.write(() => { return realm.create("Transaction", { type, account, description, amount }); });
      console.log('Transaction created');
    },
    [realm],
  );

  const transactions = useQuery(
    Transaction,
    (collection) => collection.sorted("date")
  );

  const accounts = useQuery(
    Account,
    (collection) => collection.filtered('active =  true').sorted('name')
  );

  console.log(accounts);
  

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? theme.dark.background : theme.light.background }
    ]}>
      <TransactionList transactions={transactions} />
      <AddATransactionForm accounts={accounts} onSubmit={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
});
