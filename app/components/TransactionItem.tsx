import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useRealm } from '@realm/react';
import { useTheme } from '../hooks/useTheme';

import {shadows} from '../styles/shadows';
import colors from '../styles/colors';
import {Transaction} from '../models/Transaction';
import { Account } from '../models/Account';

type TaskItemProps = {
  transaction: Transaction & Realm.Object;
};

export const TransactionItem: React.FC<TaskItemProps> = (props) => {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.task, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.description, { color: colors.text }]}>{props.transaction.date.toDateString()}</Text>
      <Text style={[styles.description, { color: colors.text }]}>{props.transaction.description}</Text>
      <Text style={[styles.description, { color: colors.text }]}>{props.transaction.amount}</Text>
      <Text style={[styles.description, { color: colors.text }]}>{props.transaction.account.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    ...shadows,
  },
  description: {
    paddingHorizontal: 10,
    fontSize: 17,
  },
});
