import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses, ExpensesDocument } from './schemas/expenses.schema';
import { ExpensesCreateDto } from './dto/expenses.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expenses.name) private model: Model<ExpensesDocument>,
  ) {}

  async create(expensesCreateDto: ExpensesCreateDto): Promise<Expenses> {
    const expenses = new this.model(expensesCreateDto);
    return expenses.save();
  }
}
