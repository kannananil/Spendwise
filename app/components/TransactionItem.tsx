import React from 'react';
import { View, Text } from 'react-native';
import { shadows } from '../styles/shadows';
import { Transaction } from '../models/Transaction';
import { useThemedStyles } from '../hooks/useThemedStyles';

type TaskItemProps = {
  transaction: Transaction & Realm.Object;
};

export const TransactionItem: React.FC<TaskItemProps> = (props) => {
  const styles = useThemedStyles((colors) => ({
    task: {
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
      borderRadius: 5,
      borderWidth: 1,
      backgroundColor: colors.card, 
      borderColor: colors.border,
      ...shadows,
    },
    description: {
      paddingHorizontal: 10,
      fontSize: 17,
      color: colors.text,
    },
  }));
  
  return (
    <View style={styles.task}>
      <Text style={styles.description}>{props.transaction.date.toDateString()}</Text>
      <Text style={styles.description}>{props.transaction.description}</Text>
      <Text style={styles.description}>{props.transaction.amount}</Text>
      <Text style={styles.description}>{props.transaction.account.name}</Text>
    </View>
  );
};
