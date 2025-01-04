import Realm, { BSON } from "realm";

export class Category extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name: string = '';
  icon: string = '';
  createdAt: Date = new Date();

  static schema = {
    name: 'Category',
    primaryKey : '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      icon: 'string',
      createdAt: 'date'
    }
  };
}
  