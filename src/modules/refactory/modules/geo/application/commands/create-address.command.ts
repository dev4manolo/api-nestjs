import { AddressEntity } from '../../domain/entities';
import { IAddressRepository } from '../../domain/repositories';
import { IUUIDGenerator } from '../../infra/uuid/contracts';
import { ICreateAddressCommand } from './contracts';

export class CreateStateCommand implements ICreateAddressCommand {
  constructor(
    private readonly addressRepository: IAddressRepository,
    private readonly uuid: IUUIDGenerator,
  ) {}

  async execute(input: ICreateAddressCommand.Input): Promise<any> {
    const { cityId, street, number, cep, complement } = input;

    const address = new AddressEntity().create({
      id: this.uuid.generate(),
      cityId,
      street,
      number,
      complement,
      cep,
    });

    await this.addressRepository.save(address);
  }
}
