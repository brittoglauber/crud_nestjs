import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ddos:ddos@cluster0.fjqfr.mongodb.net/test'), UsersModule],
})
export class AppModule {}
