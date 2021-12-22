import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Groups, GroupsDocument } from './schemas/groups.schema';
import { GroupsCreateDto } from './dto/groups.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Groups.name) private groupsModel: Model<GroupsDocument>,
  ) {}

  async create(createGroupsDto: GroupsCreateDto): Promise<Groups> {
    const createdGroups = new this.groupsModel(createGroupsDto);
    return createdGroups.save();
  }

  async findAll(): Promise<Groups[]> {
    return this.groupsModel.find().exec();
  }
}
