import React, { useCallback } from 'react';
import { Account } from '../models/Account';
import { useQuery, useRealm } from '@realm/react';
import AccountList from '../components/AccountList';
import { AddAccountForm } from '../components/AddAccountForm';
import { View } from 'react-native';

const Accounts = () => {
  const realm = useRealm();

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
    <View>
      <AccountList accounts={accounts} />
      <AddAccountForm onSubmit={handleAddAccount} />
    </View>
  );
}

export default Accounts