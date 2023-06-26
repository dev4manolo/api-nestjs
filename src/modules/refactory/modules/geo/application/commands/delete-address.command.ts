import { IAddressRepository } from '../../domain/repositories';
import { IUUIDGenerator } from '../../infra/uuid/contracts';
import { IDeleteAddressCommand, IDeleteStateCommand } from './contracts';

export class DeleteAddressCommand implements IDeleteAddressCommand {
  constructor(
    private readonly addressRepository: IAddressRepository,
    private readonly uuid: IUUIDGenerator,
  ) {}

  async execute(input: IDeleteStateCommand.Input): Promise<any> {
    const { id } = input;

    const _address = await this.addressRepository.findOne({ id });

    _address.existsOrFail();

    _address.delete();

    await this.addressRepository.save(_address);
  }
}
