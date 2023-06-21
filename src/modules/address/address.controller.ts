import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
@ApiTags('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createaddressDto: CreateAddressDto,
  ): Promise<AddressEntity> {
    try {
      return this.addressService.createAddress(createaddressDto);
    } catch (error) {
      throw new Error(`Error creating the address ${JSON.stringify(error)}`);
    }
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllAddress(): Promise<AddressEntity[]> {
    try {
      return this.addressService.getAllAddress();
    } catch (error) {
      throw new Error(`Error get all address ${JSON.stringify(error)}`);
    }
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async getAddress(@Param('id') id: string): Promise<AddressEntity> {
    try {
      return this.addressService.getAddress(id);
    } catch (error) {
      throw new Error(`Error get the address ${JSON.stringify(error)}`);
    }
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async updateAddress(
    @Body() createaddressDto: CreateAddressDto,
    @Param('id') id: string,
  ): Promise<AddressEntity> {
    try {
      return this.addressService.updateAddress(id, createaddressDto);
    } catch (error) {
      throw new Error(`Error update the address ${JSON.stringify(error)}`);
    }
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async deleteAddress(@Param('id') id: string): Promise<AddressEntity> {
    try {
      return this.addressService.deleteAddress(id);
    } catch (error) {
      throw new Error(`Error get the address ${JSON.stringify(error)}`);
    }
  }
}
