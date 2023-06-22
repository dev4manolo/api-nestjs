import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'node:crypto';
import { Repository, createConnection } from 'typeorm';
import { CityService } from '../city/city.service';
import { StateService } from '../state/state.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressrRepository: Repository<AddressEntity>,
    private readonly cityService: CityService,
    private readonly stateService: StateService,
  ) {}

  async createAddress(createAddressDto: CreateAddressDto): Promise<any> {
    const connection = await createConnection({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_DB,
      port: Number(process.env.DATABASE_PORT),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USER,
    });
    const queryRunner = connection.createQueryRunner();

    const existCity = await this.cityService.findCityByName(
      createAddressDto?.city?.name,
    );
    const existState = await this.stateService.findStateByName(
      createAddressDto?.state?.name,
    );

    console.log(existState);
    console.log(existCity);

    // if (existCity) throw new Error('City already exists');

    // if (existState) throw new Error('State already exists');

    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      if (!existState) {
        await queryRunner.query(
          'INSERT INTO state (id, name) VALUES ($1, $2)',
          [randomUUID(), createAddressDto?.state?.name],
        );
      }

      if (!existCity) {
        await queryRunner.query(
          'INSERT INTO city (id, name, state_id, active) VALUES ($1, $2, $3, $4)',
          [
            randomUUID(),
            createAddressDto?.city?.name,
            createAddressDto?.city?.stateId,
            createAddressDto?.city?.active,
          ],
        );
      }

      await queryRunner.query(
        'INSERT INTO address (id, city_id, street, number, complement, cep, active) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [
          randomUUID(),
          existCity ? existCity?.id : createAddressDto?.cityId,
          createAddressDto?.street,
          createAddressDto?.number,
          createAddressDto?.complement,
          createAddressDto?.cep,
          true,
        ],
      );
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      // throw new NotAcceptableException('action not allowed');
    } finally {
      await queryRunner.release();
      await connection.close();
    }
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
    return this.addressrRepository.update(id, {
      active: false,
      deletedAt: new Date(),
    });
  }
}
