import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Realm} from '@realm/react';
import { useTheme } from '../hooks/useTheme';
import {Transaction} from '../models/Transaction';
import {TransactionItem} from './TransactionItem';
import { useThemedStyles } from '../hooks/useThemedStyles';

type TransactionListProps = {
  transactions: Realm.Results<Transaction & Realm.Object>;
};

export const TransactionList: React.FC<TransactionListProps> = (props) => {
  const { colors } = useTheme();
  const styles = useThemedStyles((colors) => ({
    listContainer: {
      justifyContent: "center",
      backgroundColor: colors.background
    },
  }));
  
  if(props.transactions.length == 0){
    return (
      <View style={styles.listContainer}>
        <Text style={{ color: colors.text }}>No Transactions created yet</Text>
      </View>
    )
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.transactions}
        keyExtractor={task => task._id.toString()}
        renderItem={({item}) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

export default TransactionList;
