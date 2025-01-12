import Realm, { BSON, Types } from "realm";

export class Subcategory extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name: string = '';
  category: Types.ObjectId;
  icon: string = '';
  createdAt: Date = new Date();

  static schema = {
    name: 'Subcategory',
    primaryKey : '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      category: 'Category',
      icon: 'string',
      createdAt: 'date'
    }
  };
}
  