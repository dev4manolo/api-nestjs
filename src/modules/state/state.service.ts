import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateDto } from './dtos/createState.dto';
import { StateEntity } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly cityRepositoty: Repository<StateEntity>,
  ) {}

  async creatCity(createStateDto: CreateStateDto): Promise<StateEntity> {
    return this.cityRepositoty.save({
      ...createStateDto,
    });
  }

  async getAllcities(): Promise<StateEntity[]> {
    return this.cityRepositoty.find({
      where: {
        active: true,
      },
    });
  }

  async getCities(id: string): Promise<StateEntity> {
    return this.cityRepositoty.findOne({
      where: {
        id,
        active: true,
      },
    });
  }

  async updateCity(id: string, CreateStateDto: CreateStateDto): Promise<any> {
    return this.cityRepositoty.update(id, CreateStateDto);
  }
}
