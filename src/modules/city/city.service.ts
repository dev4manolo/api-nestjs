import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dtos/createCity.dto';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepositoty: Repository<CityEntity>,
  ) {}

  async creatCity(createCityDto: CreateCityDto): Promise<CityEntity> {
    return this.cityRepositoty.save({
      ...createCityDto,
    });
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
}
