import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityService } from '../city/city.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressrRepository: Repository<AddressEntity>,
    private readonly cityService: CityService,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
  ): Promise<AddressEntity> {
    return this.addressrRepository.save({
      ...createAddressDto,
    });
  }

  async getAllAddress(): Promise<AddressEntity[]> {
    return this.addressrRepository.find({
      where: {
        active: true,
      },
    });
  }

  async getAddress(id: string): Promise<AddressEntity> {
    return this.addressrRepository.findOne({
      where: {
        id,
        active: true,
      },
    });
  }

  async updateAddress(
    id: string,
    createAddressDto: CreateAddressDto,
  ): Promise<any> {
    return this.addressrRepository.update(id, createAddressDto);
  }

  async deleteAddress(id: string): Promise<any> {
    return this.addressrRepository.update(id, { active: false });
  }
}
