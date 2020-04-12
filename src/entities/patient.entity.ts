import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  civilStatus: {
    type: String,
    required: false,
  },
  nationality: {
    type: String,
    required: false,
  },
  stateCountry: {
    type: String,
    required: false,
  },
  allergies: {
    type: [String],
    required: false,
  },
  syntomps: {
    type: [String],
    required: false,
  },
  bloodType: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
  weight: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  hospital: {
    type: String,
    required: false,
  },
  medic: {
    type: String,
    required: false,
  },
});

export class PatientDocument extends mongoose.Document {
  id: string;
  name: number;
  lastName: string;
  gender: string;
  age: string;
  civilStatus: string;
  nationality: string;
  stateCountry: string;
  allergies: string[];
  syntomps: string[];
  bloodType: string;
  height: string;
  weight: string;
  address: string;
  phoneNumber: string;
  hospital: string;
  medic: string;
}

export const PATIENT_ENRITY = 'PATIENT_ENRITY';
