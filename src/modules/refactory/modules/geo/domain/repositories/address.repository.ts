import { AddressEntity } from '../entities/address.entity';

export interface IAddressRepository {
  save(input: IAddressRepository.Save): Promise<void>;
  findOne(input: IAddressRepository.Find): Promise<AddressEntity>;
  find(input?: IAddressRepository.Find): Promise<AddressEntity[]>;
}

export namespace IAddressRepository {
  export type Properties = {
    id: string;
    cityId: string;
    street: string;
    number: string;
    complement: string;
    cep: string;
  };

  export type Save = AddressEntity;
  export type Find = Partial<Properties>;
}
