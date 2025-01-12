import React, { useCallback, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useQuery, useRealm } from "@realm/react";
import { useThemedStyles } from '../hooks/useThemedStyles';
import { Transaction } from "../models/Transaction";
import TransactionList from "../components/TransactionList";
import { AddTransactionForm } from "../components/AddTransactionForm";
import { Account } from "../models/Account";
import { BSON } from "realm";
import { Balance } from "../models/Balance";

export const Home = () => {
  const styles = useThemedStyles((colors) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      positon: 'relative',
    },
    floatingButton: {
      positon: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#2196F3',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 50,
      // elevation: 8,
    },
    floatingButtonIcon: {
      padding: 0,
      margin: 0,
    },
  }));
  
  const realm = useRealm();

  const [isAddTransactionFormVisible, setIsAddTransactionFormVisible] = useState(false);
  
  const handleAddTransaction = useCallback(
    (type: string, account: Account & Realm.Object, description: string, amount: number): void => {
      realm.write(() => {
        const transaction = realm.create("Transaction", {
          _id: new BSON.ObjectId(),
          type,
          account,
          description,
          amount,
          date: new Date(),
        });

        const lastBalance: Balance = realm
          .objects("Balance")
          .filtered("account._id == $0", account._id)
          .sorted("createdAt", true)[0];

        let closingBalance: number = lastBalance?.closingBalance || 0;
        if (type === "income") {
          closingBalance += amount;
        } else if (type === "expense") {
          closingBalance -= amount;
        }

        realm.create("Balance", {
          _id: new BSON.ObjectId(),
          account,
          transaction,
          closingBalance,
          createdAt: new Date(),
        });
      });
    },
    [realm]
  );


  const transactions = useQuery(
    Transaction,
    (collection) => collection.sorted("date")
  );

  const groupedTransactions: Record<string, Transaction[]> = {};

  transactions.forEach((transaction) => {
    const dateKey = transaction.date.toISOString().split("T")[0];
    if (!groupedTransactions[dateKey]) {
      groupedTransactions[dateKey] = [];
    }
    groupedTransactions[dateKey].push(transaction);
  });

  const TranscationLists = () => {
    return (
      <View>
        {Object.keys(groupedTransactions).map((dateKey) => {
          return (
            <View key={dateKey}>
              <TransactionList title={dateKey} transactions={groupedTransactions[dateKey]} />
            </View>
          );
        })}
      </View>
    )
  }
  

  const accounts = useQuery(
    Account,
    (collection) => collection.filtered('active =  true').sorted('name')
  );

  const handleAddTransactionButtonPress = () => {
    setIsAddTransactionFormVisible(true);
  };

  const onCancel = () => {
    setIsAddTransactionFormVisible(false);
  };

  return (
    <View style={styles.container}>
      {
        isAddTransactionFormVisible
        ? <AddTransactionForm accounts={accounts} onSubmit={handleAddTransaction} onCancel={onCancel}/>
        : <View>
            <TranscationLists />
            <TouchableOpacity style={styles.floatingButton} onPress={() => handleAddTransactionButtonPress()} >
              <Icon name='add' size={30} color='white' style={styles.floatingButtonIcon} />
            </TouchableOpacity>
          </View>
      }
    </View>
  );
};
