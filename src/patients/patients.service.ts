import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PatientDocument, PATIENT_ENRITY } from '../entities/patient.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(PATIENT_ENRITY)
    private readonly PatientModel: Model<PatientDocument>,
  ) {}

  async getAll(offset = 0, limit = 10) {
    console.log(offset, limit);
    return (
      (await this.PatientModel.find()
        .skip(offset)
        .limit(limit)
        .exec()) || []
    );
  }

  getById(id: string) {
    return this.PatientModel.findById(id);
  }

  create(createPatientDto: any) {
    return this.PatientModel.create(createPatientDto);
  }

  async update(id: string, createPatientDto: any) {
    await this.PatientModel.update(
      {
        _id: id,
      },
      createPatientDto,
    ).exec();
    return this.PatientModel.findById(id);
  }

  delete(id: string) {
    return this.PatientModel.remove({
      _id: id,
    });
  }
}
