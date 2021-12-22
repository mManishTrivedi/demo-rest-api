import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type ExpensesDocument = Expenses & Document;

// interface ShareValue = {
//   readonly uid:string;
//   readonly amount:number;
// }
// interface Share {
//   readonly type: string;
//   readonly values: [ShareValue]
// }

@Schema({ versionKey: false })
export class Expenses {
  @Prop()
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gid: string; //todo: group reference-id

  @Prop({ required: true })
  amount: number;

  //@ref: https://stackoverflow.com/questions/65597011/what-should-be-the-type-of-a-field-in-schema-if-any-cannot-be-used-in-nest-js
  @Prop({ type: mongoose.Schema.Types.Mixed })
  share: any; //todo: proper define schema

  @Prop({ required: true })
  paid_by: string; //Created-By user reference id

  @Prop({ required: true })
  paid_at: Date;

  @Prop()
  c_at: Date;
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);

// middleware/hook: to create new _id and creation field
ExpensesSchema.pre('save', function (this: Expenses, next) {
  this._id = new Types.ObjectId().toHexString();
  this.c_at = new Date();
  next();
});
