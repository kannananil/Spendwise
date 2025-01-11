import React from 'react';
import { View, Text } from 'react-native';
import { shadows } from '../styles/shadows';
import { Account } from '../models/Account';
import { useThemedStyles } from '../hooks/useThemedStyles';

type AccountItemProps = {
  account: Account & Realm.Object;
};

export const AccountItem: React.FC<AccountItemProps> = (props) => {
  const styles = useThemedStyles((colors) => ({
    account: {
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
      backgroundColor: colors.white,
      borderColor: colors.border,
      borderRadius: 5,
      ...shadows,
    },
    name: {
      paddingHorizontal: 10,
      color: colors.text,
      fontSize: 17,
    },
    balance: {
      paddingHorizontal: 10,
      color: colors.text,
      fontSize: 17,
    },
  }));
  
  return (
    <View style={styles.account}>
      <Text numberOfLines={1} style={styles.name}> {props.account.name} </Text>
      <Text numberOfLines={1} style={styles.balance}> {props.account.initialBalance} </Text>
    </View>
  );
};
