import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'node:crypto';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dtos/createCity.dto';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepositoty: Repository<CityEntity>,
  ) {}

  async createCity(createCityDto: CreateCityDto): Promise<CityEntity> {
    const existCity = await this.cityRepositoty.findOne({
      where: {
        name: createCityDto?.name,
      },
    });

    if (existCity) throw new NotAcceptableException('City already exists');

    const city = await this.cityRepositoty.save({
      id: randomUUID(),
      ...createCityDto,
    });

    return city;
  }

  async getAllcities(): Promise<CityEntity[]> {
    return this.cityRepositoty.find({
      where: {
        active: true,
      },
    });
  }

  async getCities(id: string): Promise<CityEntity> {
    return this.cityRepositoty.findOne({
      where: {
        id,
        active: true,
      },
    });
  }

  async updateCity(id: string, createCityDto: CreateCityDto): Promise<any> {
    return this.cityRepositoty.update(id, createCityDto);
  }

  async deleteCity(id: string): Promise<any> {
    return this.cityRepositoty.update(id, { active: false });
  }

  async findCityById(cityId: string): Promise<CityEntity> {
    const city = await this.cityRepositoty.findOne({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new NotFoundException(`City Not Found`);
    }

    return city;
  }

  async findCityByName(name: string): Promise<CityEntity> {
    const city = await this.cityRepositoty.findOne({
      where: {
        name: name,
      },
    });

    if (!city) {
      throw new NotFoundException(`City Not Found`);
    }

    return city;
  }
}
