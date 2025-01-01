import Realm, { BSON } from "realm";
import { Account } from "./Account";
import { Transaction } from "./Transaction";

export class Balance extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId();
    accountId: {type: 'object', objectType: 'Account'};
    transactionId: {type: 'object', objectType: 'Transaction'};
    closingBalance: number = 0;
    createdAt: Date = new Date();
  
    static primaryKey = '_id';
  }
  