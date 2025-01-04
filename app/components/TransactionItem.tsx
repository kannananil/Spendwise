import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { useRealm } from '@realm/react';

import {shadows} from '../styles/shadows';
import colors from '../styles/colors';
import {Transaction} from '../models/Transaction';
import { Account } from '../models/Account';

type TaskItemProps = {
  transaction: Transaction & Realm.Object;
};

export const TransactionItem: React.FC<TaskItemProps> = (props) => {
  
  return (
    <View style={styles.task}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}> {props.transaction.description} </Text>
        <Text style={styles.description}> {props.transaction.amount} </Text>
        <Text style={styles.description}> {props.transaction.account.name} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...shadows,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 17,
  },
  status: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.gray,
  },
  completed: {
    backgroundColor: colors.purple,
  },
  deleteButton: {
    justifyContent: 'center',
  },
  deleteText: {
    marginHorizontal: 10,
    color: colors.gray,
    fontSize: 17,
  },
  icon: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
