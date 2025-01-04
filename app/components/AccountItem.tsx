import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import {shadows} from '../styles/shadows';
import colors from '../styles/colors';
import {Account} from '../models/Account';
import { useRealm } from '@realm/react';

type AccountItemProps = {
  account: Account & Realm.Object;
};

export const AccountItem: React.FC<AccountItemProps> = (props) => {
    return (
      <View style={styles.account}>
        <Text numberOfLines={1} style={styles.name}>{props.account.name}</Text>
        <Text numberOfLines={1} style={styles.balance}>{props.account.initialBalance}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  account: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...shadows,
  },
  name: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 17,
  },
  balance: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 17,
  },
});
