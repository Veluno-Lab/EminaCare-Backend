import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CareServiceService } from './care_services.service';
import { CreateCareServiceDto } from './dtos/care_service-create.dto';
import { UpdateCareServiceDto } from './dtos/care_service-update.dto';

@Controller('care-services')
export class CareServiceController {
  constructor(private readonly careService: CareServiceService) {}

  @Post()
  create(@Body() dto: CreateCareServiceDto) {
    return this.careService.create(dto);
  }

  @Get()
  findAll() {
    return this.careService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCareServiceDto) {
    return this.careService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careService.remove(id);
  }
}
