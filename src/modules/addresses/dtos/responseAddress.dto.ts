import { ResponseCityDto } from '../../cities/dtos/responseCity.dto';
import { AddressEntity } from '../entities/address.entity';

export class ResponseAddressDto {
  street: string;
  complement: string;
  number: number;
  cep: string;
  city?: ResponseCityDto;

  constructor(address: AddressEntity) {
    this.street = address.street;
    this.complement = address.complement;
    this.number = address.number;
    this.cep = address.cep;
    this.city = address.city ? new ResponseCityDto(address.city) : undefined;
  }
}
