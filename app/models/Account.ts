import { BSON } from "realm";

export class Account extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name: string = '';
  description: string = '';
  type: 'Bank' | 'Credit Card' | 'Cash' = 'Bank';
  active: boolean = true;
  initialBalance: number = 0;
  createdAt: Date = new Date();

  static primaryKey = '_id';
}
