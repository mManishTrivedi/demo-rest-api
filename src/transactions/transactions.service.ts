import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionsCreateDto } from './dto/transactions.dto';
import {
  Transactions,
  TransactionsDocument,
} from './schemas/transactions.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transactions.name) private model: Model<TransactionsDocument>,
  ) {}

  async create(createDto: TransactionsCreateDto): Promise<Transactions> {
    const txn = new this.model(createDto);
    return await txn.save();
  }
}
