import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Realm } from "@realm/react";

import { Account } from "../models/Account";
import { AccountItem } from "./AccountItem";

type AccountListProps = {
  accounts: Realm.Results<Account & Realm.Object>;
};

export const AccountList: React.FC<AccountListProps> = (props) => {
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

const styles = StyleSheet.create({
  listContainer: {
    // flex: 1,
    justifyContent: "center",
  },
});

export default AccountList;
