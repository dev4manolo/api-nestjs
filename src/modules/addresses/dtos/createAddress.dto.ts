import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  street: string;

  @ApiProperty()
  @IsInt()
  number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  complement: string;

  @ApiProperty()
  @IsString()
  cep: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  cityId?: string;
}
