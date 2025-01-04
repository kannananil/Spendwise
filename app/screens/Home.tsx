import React, { useCallback } from "react";

import { Transaction } from "../models/Transaction";

import { useQuery, useRealm } from "@realm/react";
import TransactionList from "../components/TransactionList";
import { AddATransactionForm } from "../components/AddTransactionForm";
import { View } from "react-native";
import { Account } from "../models/Account";

export const Home = () => {
  const realm = useRealm();
  
  const handleAddTransaction = useCallback(
    (type: string, account: Account & Realm.Object, description: string, amount: number): void => {
      console.log(type, account, description, amount);
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

  console.log(accounts);
  

  return (
    <View>
      <TransactionList transactions={transactions} />
      <AddATransactionForm accounts={accounts} onSubmit={handleAddTransaction} />
    </View>
  );
};
