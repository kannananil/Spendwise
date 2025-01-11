import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Account } from '../models/Account';
import { useQuery, useRealm } from '@realm/react';
import AccountList from '../components/AccountList';
import { AddAccountForm } from '../components/AddAccountForm';
import { useThemedStyles } from '../hooks/useThemedStyles';

const Accounts = () => {
  const realm = useRealm();
  const styles = useThemedStyles((colors) => ({
    container: {
      flex: 1,
    },
    darkContainer: {
      backgroundColor: 'black',
    },
  }));

  const handleAddAccount = useCallback(
    (name: string, description: string, type: string, balance: number): void => {
      realm.write(() => { return realm.create("Account", { name, description, initialBalance: balance, type}); });
    },
    [realm],
  );

  const accounts = useQuery(
    Account,
    collection => collection.filtered('active == true').sorted('name')
  );
  
  return (
    <View style={styles.container}>
      <AccountList accounts={accounts} />
      <AddAccountForm onSubmit={handleAddAccount} />
    </View>
  );
}

export default Accounts