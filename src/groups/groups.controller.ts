import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsCreateDto } from './dto/groups.dto';
import { ExpensesCreateDto } from 'src/expenses/dto/expenses.dto';
import { ExpensesService } from 'src/expenses/expenses.service';

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly expensesService: ExpensesService,
    ) {}

  @Post()
  async create(@Body() groupsCreateDto: GroupsCreateDto) {
    return await this.groupsService.create(groupsCreateDto);
  }

  @Put('/:groupId')
  async update(
    @Param('groupId') groupId: string,
    @Body() groupsCreateDto: GroupsCreateDto,
  ) {
    //TODO: Update call by created user only
    return await this.groupsService.update(groupId, groupsCreateDto);
  }

  @Post('/:groupId/expenses', )
  async addExpense(
    @Param('groupId') groupId: string,
    @Body() expenses: ExpensesCreateDto,
  ) {
    expenses.gid = groupId;
    return await this.expensesService.create(expenses)
  }
}
