import Realm, { BSON, Types } from "realm";

export class Balance extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  account: Types.ObjectId;
  transaction: Types.ObjectId;
  closingBalance: number = 0;
  createdAt: Date = new Date();

  static schema = {
    name: 'Balance',
    primaryKey : '_id',
    properties: {
      _id: 'objectId',
      account: 'Account',
      transaction: 'Transaction',
      closingBalance: 'double',
      createdAt: 'date'
    }
  };
}
  