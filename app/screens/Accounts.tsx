import React, { useCallback } from 'react';
import { Account } from '../models/Account';
import { useQuery, useRealm } from '@realm/react';
import AccountList from '../components/AccountList';
import { AddAccountForm } from '../components/AddAccountForm';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { theme } from '../styles/theme';

const Accounts = () => {
  const realm = useRealm();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleAddAccount = useCallback(
    (name: string, description: string, type: string, balance: number): void => {
      console.log(name, description, type, balance);
      
      realm.write(() => { return realm.create("Account", { name, description, initialBalance: balance, type}); });
      console.log('Account created');
    },
    [realm],
  );

  const accounts = useQuery(
    Account,
    collection => collection.filtered('active == true').sorted('name')
  );

  console.log(accounts);
  
  
  return (
    <View style={[
      styles.container,
      { backgroundColor: isDark ? theme.dark.background : theme.light.background }
    ]}>
      <AccountList accounts={accounts} />
      <AddAccountForm onSubmit={handleAddAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
});

export default Accounts