import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Realm} from '@realm/react';
import { useTheme } from '../hooks/useTheme';
import {Transaction} from '../models/Transaction';
import {TransactionItem} from './TransactionItem';
import { useThemedStyles } from '../hooks/useThemedStyles';

type TransactionListProps = {
  title: string;
  transactions: Realm.Results<Transaction & Realm.Object>;
};

export const TransactionList: React.FC<TransactionListProps> = (props) => {
  const styles = useThemedStyles((colors) => ({
    listContainer: {
      justifyContent: "center",
      backgroundColor: colors.background
    },
    title: {
      padding: 5,
      fontSize: 17,
      color: colors.text,
    }
  }));
  
  if(props.transactions.length == 0){
    return (
      <View style={styles.listContainer}>
        <Text style={styles.text}>No Transactions created yet</Text>
      </View>
    )
  }
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.transactions}
        keyExtractor={task => task._id.toString()}
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

export default TransactionList;
