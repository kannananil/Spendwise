import { Obj } from './../../node_modules/reselect/es/types.d';
import { ObjectId } from './../../node_modules/bson/src/objectid';
import Realm, { BSON, Types } from 'realm';
import { Account } from './Account';
import { Category } from './Category';
import { Subcategory } from './SubCategory';
import { Tag } from './Tag';

export class Transaction extends Realm.Object {
  _id: BSON.ObjectId;
  type: 'expense' | 'income' | 'transfer';
  amount: number;
  description: string = '';
  account: Account;
  category?: Category;
  subcategory?: Subcategory;
  tags: Realm.List<Types.ObjectId>;
  date: Date;

  static schema = {
    name: 'Transaction',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: new BSON.ObjectId() },
      type: { type: 'string', default: 'expense' },
      amount: { type: 'double', default: 0 },
      description: { type: 'string', default: '' },
      account: 'Account',
      category: 'Category?',
      subcategory: 'Subcategory?',
      tags: { type: 'list', objectType: 'Tag', default: [] },
      date: { type: 'date', default: new Date() },
    },
  };
}
