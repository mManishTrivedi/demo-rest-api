import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TransactionsDocument = Transactions & Document;

@Schema({ versionKey: false })
export class Transactions {
  @Prop()
  _id: string;

  // created by
  @Prop({ required: true })
  uid: string;

  @Prop({ required: true })
  amount: number;

  // @Prop({ required: true })
  // paid_at: Date;

  @Prop({ required: true, default: 'manual', enum: ['manual', 'automatic'] })
  type: string;

  // set when  type is manual
  @Prop({ default: null })
  paid_to: string;

  @Prop({ default: null })
  expenses_ids: [string];

  @Prop({ default: null })
  comment: string;

  @Prop()
  c_at: Date;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);

// middleware/hook: to create new _id and creation field
TransactionsSchema.pre('save', function (this: Transactions, next) {
  this._id = new Types.ObjectId().toHexString();
  this.c_at = new Date();
  next();
});
