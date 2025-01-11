import React from "react";
import { View, Text, FlatList } from "react-native";
import { Realm } from "@realm/react";
import { Account } from "../models/Account";
import { AccountItem } from "./AccountItem";
import { useThemedStyles } from "../hooks/useThemedStyles";

type AccountListProps = {
  accounts: Realm.Results<Account & Realm.Object>;
};

export const AccountList: React.FC<AccountListProps> = (props) => {
    const styles = useThemedStyles((colors) => ({
      listContainer: {
        justifyContent: "center",
      },
    }));
    
  if(props.accounts.length == 0){
    return (
      <View style={styles.listContainer}>
        <Text>No Accounts created yet</Text>
      </View>
    )
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.accounts}
        keyExtractor={(account) => account._id.toString()}
        renderItem={({ item }) => <AccountItem account={item} />}
      />
    </View>
  );
};

export default AccountList;
