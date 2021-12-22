import { Body, Controller, Post, Put, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsCreateDto } from './dto/groups.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

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
}
