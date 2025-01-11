import React, { useCallback } from "react";
import { View } from "react-native";
import { useQuery, useRealm } from "@realm/react";
import { useThemedStyles } from '../hooks/useThemedStyles';
import { Transaction } from "../models/Transaction";
import TransactionList from "../components/TransactionList";
import { AddTransactionForm } from "../components/AddTransactionForm";
import { Account } from "../models/Account";

export const Home = () => {
  const realm = useRealm();
  const styles = useThemedStyles((colors) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  }));
  
  const handleAddTransaction = useCallback(
    (type: string, account: Account & Realm.Object, description: string, amount: number): void => {
      realm.write(() => { return realm.create("Transaction", { type, account, description, amount }); });
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

  return (
    <View style={styles.container}>
      <TransactionList transactions={transactions} />
      <AddTransactionForm accounts={accounts} onSubmit={handleAddTransaction} />
    </View>
  );
};
