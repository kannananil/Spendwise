import { BSON } from "realm";
import { Account } from "./Account";
import { Category } from "./Category";
import { Subcategory } from "./SubCategory";
import { Tag } from "./Tag";

export class Transaction extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId();
    type: 'expense' | 'income' | 'transfer' = 'expense';
    amount: number = 0;
    description: string = '';
    accountId: Account;
    categoryId: Category;
    subcategoryId?: Subcategory | null;
    tags?: Realm.List<Tag>;
    date: Date = new Date();
  
    static primaryKey = '_id';
  }
  