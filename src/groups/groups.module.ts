import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Groups, GroupsSchema } from './schemas/groups.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Groups.name, schema: GroupsSchema }]),
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
