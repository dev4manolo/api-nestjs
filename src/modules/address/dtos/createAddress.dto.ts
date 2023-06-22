import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { CityEntity } from 'src/modules/city/entities/city.entity';
import { StateEntity } from 'src/modules/state/entities/state.entity';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  street: string;

  @ApiProperty()
  @IsInt()
  number: number;

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

  @IsOptional()
  @ApiProperty()
  state?: StateEntity;

  @IsOptional()
  @ApiProperty()
  city?: CityEntity;
}
