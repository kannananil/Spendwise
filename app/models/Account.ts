import Realm, { BSON } from "realm";

export class Account extends Realm.Object {
  _id = new BSON.ObjectID();
  name: String;
  description: String;
  type: 'cash' | 'bank' | 'credit' | 'investment';
  active: boolean;
  initialBalance: number;
  createdAt: Date;
  
  static schema = {
    name: 'Account',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      name: 'string',
      description: {type: 'string', default: ''},
      type: {type: 'string', default: 'cash'},
      active: {type: 'bool', default: true},
      initialBalance: {type: 'double', default: 0},
      createdAt: { type: 'date', default: () => new Date() }
    },
  };
}
