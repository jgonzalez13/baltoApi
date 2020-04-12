import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PATIENT_ENRITY, PatientSchema } from '../entities/patient.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PATIENT_ENRITY,
        schema: PatientSchema,
      },
    ]),
  ],
  providers: [PatientsService],
  controllers: [PatientsController],
})
export class PatientsModule {}
