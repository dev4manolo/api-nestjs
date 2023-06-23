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
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';

@Controller('addresses')
@ApiTags('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(@Body() createAddressDto: CreateAddressDto) {
    try {
      return this.addressService.createAddress(createAddressDto);
    } catch (error) {
      throw new BadRequestException(
        `Error creating the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getAllAddress(@Res() res: Response) {
    try {
      const data = await await this.addressService.getAllAddress();
      return res.status(200).json({ message: 'ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get all address ${JSON.stringify(error)}`,
      );
    }
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async getAddress(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.addressService.getAddress(id);
      return res.status(200).json({ message: 'ok', data });
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async updateAddress(
    @Res() res: Response,
    @Body() createaddressDto: CreateAddressDto,
    @Param('id') id: string,
  ) {
    try {
      const data = await this.addressService.updateAddress(
        id,
        createaddressDto,
      );
      return res.status(204).json(data);
    } catch (error) {
      throw new BadRequestException(
        `Error update the address ${JSON.stringify(error)}`,
      );
    }
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async deleteAddress(@Res() res: Response, @Param('id') id: string) {
    try {
      await this.addressService.deleteAddress(id);
      return res.status(204).json();
    } catch (error) {
      throw new BadRequestException(
        `Error get the address ${JSON.stringify(error)}`,
      );
    }
  }
}
