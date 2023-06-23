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
import { CreateStateDto } from './dtos/createState.dto';
import { StateService } from './state.service';

@Controller('states')
@ApiTags('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(@Body() createStateDto: CreateStateDto) {
    return this.stateService.createState(createStateDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllStates(@Res() res: Response) {
    try {
      const data = await this.stateService.getAllStates();
      return res.status(200).json({ message: 'Ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async getState(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.stateService.getState(id);
      return res.status(200).json({ message: 'Ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async updateState(
    @Res() res: Response,
    @Body() createCityDto: CreateStateDto,
    @Param('id') id: string,
  ) {
    try {
      await this.stateService.updateState(id, createCityDto);
      return res.status(204).json({ message: 'Ok' });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async deleteState(@Res() res: Response, @Param('id') id: string) {
    try {
      await this.stateService.deleteState(id);
      return res.status(204).json({ message: 'Ok' });
    } catch (error) {
      throw new BadRequestException(`Error get the address`);
    }
  }
}
