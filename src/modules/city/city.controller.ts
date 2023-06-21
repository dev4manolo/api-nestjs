import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CityService } from './city.service';
import { CreateCityDto } from './dtos/createCity.dto';
import { CityEntity } from './entities/city.entity';

@Controller('city')
@ApiTags('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createCityDto: CreateCityDto,
  ): Promise<CityEntity> {
    return this.cityService.creatCity(createCityDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllAddress(): Promise<CityEntity[]> {
    return this.cityService.getAllcities();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async getAddress(@Param('id') id: string): Promise<CityEntity> {
    return this.cityService.getCities(id);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async updateAddress(
    @Body() createCityDto: CreateCityDto,
    @Param('id') id: string,
  ): Promise<CityEntity> {
    return this.cityService.updateCity(id, createCityDto);
  }
}
