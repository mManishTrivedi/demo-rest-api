import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TransactionsCreateDto } from './dto/transactions.dto';
import { Transactions } from './schemas/transactions.schema';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  /**
   * invoke to create manual txn
   * @param createDto
   * @returns
   */
  @Post()
  async create(
    @Body() createDto: TransactionsCreateDto,
  ): Promise<Transactions> {
    return await this.service.create(createDto);
  }

  @Get()
  async get(@Query() query: any = {}) {
    const condition: any = {};
    if (query.from && query.end) {
      // TODO: date formatting
      // TODO: make sure end-date must be greater than from-date
      const from = new Date(query.from);
      const end = new Date(query.end);
      condition.c_at = {
        $gte: from,
        $lte: end,
      };
    }

    if (query.groupId) {
      // TODO: better performance, add group-id into txt table
      //first get all expenses of specific groups, then pull all txt
    }

    return await this.service.findAll(condition);
  }
}
