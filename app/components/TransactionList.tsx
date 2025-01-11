import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Realm} from '@realm/react';
import { useTheme } from '../hooks/useTheme';

import {Transaction} from '../models/Transaction';
import {TransactionItem} from './TransactionItem';

type TransactionListProps = {
  transactions: Realm.Results<Transaction & Realm.Object>;
};

export const TransactionList: React.FC<TransactionListProps> = (props) => {
  const { colors } = useTheme();
  console.log(props.transactions);
  
  if(props.transactions.length == 0){
    return (
      <View style={[styles.listContainer, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>No Transactions created yet</Text>
      </View>
    )
  }
  return (
    <View style={[styles.listContainer, { backgroundColor: colors.background }]}>
      <FlatList
        data={props.transactions}
        keyExtractor={task => task._id.toString()}
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // flex: 1,
    justifyContent: 'center',
  },
});

export default TransactionList;
