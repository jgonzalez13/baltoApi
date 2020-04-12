import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreatePatientDto {
  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  name: number;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsNumber()
  age: string;

  @IsOptional()
  @IsString()
  civilStatus: string;

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  stateCountry: string;

  @IsOptional()
  @IsString({
    each: true,
  })
  allergies: string[];

  @IsOptional()
  @IsString({
    each: true,
  })
  syntomps: string[];

  @IsOptional()
  @IsString()
  bloodType: string;

  @IsOptional()
  @IsString()
  height: string;

  @IsOptional()
  @IsString()
  weight: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  hospital: string;

  @IsOptional()
  @IsString()
  medic: string;
}
