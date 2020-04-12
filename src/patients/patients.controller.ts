import {
  Controller,
  Get,
  Query,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PagedDto } from '../common/Paged.dto';
import { GenericIdDto } from '../common/GeneticId.dto';
import { CreatePatientDto } from './DTO/CreatePatient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly PatientsService: PatientsService) {}

  @Get()
  getAll(@Query() paged: PagedDto) {
    return this.PatientsService.getAll(paged.offset, paged.limit);
  }

  @Get(':id')
  async getById(@Param() idDto: GenericIdDto) {
    const patient = await this.PatientsService.getById(idDto.id);
    if (!patient) {
      throw new NotFoundException('El paciente no existe');
    }
    return patient;
  }

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    return this.PatientsService.create(createPatientDto);
  }

  @Put(':id')
  async update(
    @Param() idDto: GenericIdDto,
    @Body() createPatientDto: CreatePatientDto,
  ) {
    return this.PatientsService.update(idDto.id, createPatientDto);
  }

  @Delete(':id')
  async delete(@Param() idDto: GenericIdDto) {
    return this.PatientsService.delete(idDto.id);
  }
}
