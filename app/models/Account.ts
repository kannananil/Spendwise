import Realm, {BSON} from 'realm';

export class Account extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name: string;
  description: string = '';
  type: string = 'Bank';
  active: boolean = true;
  balance: number = 0;

  static primaryKey = '_id';
}
