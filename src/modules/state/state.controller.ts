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
import { CreateStateDto } from './dtos/createState.dto';
import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';

@Controller('state')
@ApiTags('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createStateDto: CreateStateDto,
  ): Promise<StateEntity> {
    return this.stateService.creatCity(createStateDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllAddress(): Promise<StateEntity[]> {
    return this.stateService.getAllcities();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async getAddress(@Param('id') id: string): Promise<StateEntity> {
    return this.stateService.getCities(id);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async updateAddress(
    @Body() createCityDto: CreateStateDto,
    @Param('id') id: string,
  ): Promise<StateEntity> {
    return this.stateService.updateCity(id, createCityDto);
  }
}
