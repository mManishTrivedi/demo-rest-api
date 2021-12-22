import { Body, Controller, Post } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsCreateDto } from './dto/groups.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() groupsCreateDto: GroupsCreateDto) {
    let a:any;
    a = groupsCreateDto;
    a._id = 'manishs';
    await this.groupsService.create(a);
  }
}
