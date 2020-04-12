import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PatientsModule } from './patients/patients.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://elmanny:CnrRNds0TVenB6o1@cluster0-jm13k.mongodb.net/test?retryWrites=true&w=majority',
      {},
    ),
    DatabaseModule,
    PatientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
