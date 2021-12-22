import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, Types } from 'mongoose';
import { nextTick } from 'process';

export type GroupsDocument = Groups & Document;

@Schema({ versionKey: false })
export class Groups {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  uid: [string];

  @Prop()
  c_by: string; //Created-By

  @Prop()
  c_at: Date;
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);

GroupsSchema.pre('save', function (this: Groups, next) {
  // doc._id = new Mongoose.Types.ObjectId().toHexString(), //5cd5308e695db945d3cc81a9
  this._id = new Types.ObjectId().toHexString(); //5cd5308e695db945d3cc81a9

  this.c_at = new Date();

  next();
});
