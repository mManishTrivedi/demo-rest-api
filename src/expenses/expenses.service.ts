import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses, ExpensesDocument } from './schemas/expenses.schema';
import { ExpensesCreateDto } from './dto/expenses.dto';
import { TransactionsService } from 'src/transactions/transactions.service';
import { TransactionsDocument } from 'src/transactions/schemas/transactions.schema';
import { TransactionsCreateDto } from 'src/transactions/dto/transactions.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expenses.name) private model: Model<ExpensesDocument>,
    private txnService: TransactionsService,
  ) {}

  async create(expensesCreateDto: ExpensesCreateDto): Promise<Expenses> {
    const expenses = new this.model(expensesCreateDto);
    const data = await expenses.save();

    // map all data to txn collection
    const txn: TransactionsCreateDto = {
      uid: data.paid_by,
      amount: data.amount,
      type: 'automatic',
      expenses_ids: [data._id],
      comment: 'CREATED_BY_SYSTEM',
      paid_to: null,
    };

    // create transaction here
    await this.txnService.create(txn);
    return data;
  }
}
