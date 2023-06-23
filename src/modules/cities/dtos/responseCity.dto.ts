import { ApiProperty } from '@nestjs/swagger';
import { ResponseStateDto } from '../../states/dtos/responseState.dto';
import { CityEntity } from '../entities/city.entity';

export class ResponseCityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  state?: ResponseStateDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city.state ? new ResponseStateDto(city.state) : undefined;
  }
}
