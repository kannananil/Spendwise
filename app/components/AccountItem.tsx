import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useTheme } from '../hooks/useTheme';

import {shadows} from '../styles/shadows';
import colors from '../styles/colors';
import {Account} from '../models/Account';

type AccountItemProps = {
  account: Account & Realm.Object;
};

export const AccountItem: React.FC<AccountItemProps> = (props) => {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.account, { 
      backgroundColor: colors.card,
      borderColor: colors.border
    }]}>
      <Text numberOfLines={1} style={[styles.name, { color: colors.text }]}>
        {props.account.name}
      </Text>
      <Text numberOfLines={1} style={[styles.balance, { color: colors.text }]}>
        {props.account.initialBalance}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  account: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
