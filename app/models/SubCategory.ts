import Realm, { BSON } from "realm";
import { Category } from "./Category";

export class Subcategory extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId();
    name: string = '';
    categoryId: {type: 'object', objectType: 'Category'};
    icon: string = '';
    createdAt: Date = new Date();
  
    static primaryKey = '_id';
  }
  