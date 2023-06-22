import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CityService } from './city.service';
import { CreateCityDto } from './dtos/createCity.dto';

@Controller('city')
@ApiTags('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(@Body() createCityDto: CreateCityDto) {
    try {
      return this.cityService.createCity(createCityDto);
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllAddress(@Res() res: Response) {
    try {
      const data = await this.cityService.getAllcities();
      return res.status(200).json({ message: 'Ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async getAddress(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.cityService.getCities(id);
      return res.status(200).json({ message: 'Ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async updateAddress(
    @Res() res: Response,
    @Body() createCityDto: CreateCityDto,
    @Param('id') id: string,
  ) {
    try {
      const data = await this.cityService.updateCity(id, createCityDto);
      return res.status(200).json({ message: 'Ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async deleteAddress(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.cityService.deleteCity(id);
      return res.status(200).json({ message: 'Ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }
}
