import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'node:crypto';
import { Repository } from 'typeorm';
import { CreateStateDto } from './dtos/createState.dto';
import { StateEntity } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepositoty: Repository<StateEntity>,
  ) {}

  async createState(createStateDto: CreateStateDto): Promise<any> {
    const existState = await this.stateRepositoty.findOne({
      where: {
        name: createStateDto?.name,
      },
    });

    if (existState) throw new NotAcceptableException('State already exists');

    return await this.stateRepositoty.save({
      id: randomUUID(),
      ...createStateDto,
    });
  }

  async getAllStates(): Promise<StateEntity[]> {
    return await this.stateRepositoty.find({
      where: {
        active: true,
      },
    });
  }

  async getState(id: string): Promise<StateEntity> {
    return await this.stateRepositoty.findOne({
      where: {
        id,
        active: true,
      },
    });
  }

  async updateState(id: string, CreateStateDto: CreateStateDto): Promise<any> {
    return await this.stateRepositoty.update(id, CreateStateDto);
  }

  async deleteState(id: string): Promise<any> {
    const data = await this.findStateById(id);

    if (!data?.active) throw new Error('Invalid State Id');

    return await this.stateRepositoty.update(id, {
      active: false,
      deletedAt: new Date(),
    });
  }

  async findStateByName(name: string): Promise<StateEntity> {
    const city = await this.stateRepositoty.findOne({
      where: {
        name: name,
      },
    });

    if (!city) {
      throw new NotFoundException(`State Not Found`);
    }

    return city;
  }

  async findStateById(id: string): Promise<StateEntity> {
    const city = await this.stateRepositoty.findOne({
      where: {
        id: id,
      },
    });

    if (!city) {
      throw new NotFoundException(`State Not Found`);
    }

    return city;
  }
}
