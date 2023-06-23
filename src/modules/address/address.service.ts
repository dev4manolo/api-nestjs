import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'node:crypto';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressrRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(createAddressDto: CreateAddressDto): Promise<any> {
    return await this.addressrRepository.save({
      id: randomUUID(),
      ...createAddressDto,
    });
  }

  async getAllAddress(): Promise<any[]> {
    const addresses = await this.addressrRepository.find({
      where: {
        active: true,
      },
    });

    return addresses;
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
    return this.addressrRepository.update(id, {
      active: false,
      deletedAt: new Date(),
    });
  }
}
