import { BSON } from "realm";

export class Category extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId();
    name: string = '';
    icon: string = '';
    createdAt: Date = new Date();
  
    static primaryKey = '_id';
  }
  