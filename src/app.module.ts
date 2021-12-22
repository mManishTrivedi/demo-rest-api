import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://manish:hRNuqni7q9Rz9Ikg@cluster0.5qddp.mongodb.net/db1?retryWrites=true&w=majority',
    ),
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
