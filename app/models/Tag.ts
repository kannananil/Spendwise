import Realm, { BSON } from "realm";

export class Tag extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name: string = '';
  createdAt: Date = new Date();

  static schema = {
    name: 'Tag',
    primaryKey : '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      createdAt: 'date'
    }
  };
}
  