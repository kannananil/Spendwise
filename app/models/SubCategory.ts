import { BSON } from "realm";
import { Category } from "./Category";

export class Subcategory extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId();
    name: string = '';
    categoryId: Category;
    icon: string = '';
    createdAt: Date = new Date();
  
    static primaryKey = '_id';
  }
  