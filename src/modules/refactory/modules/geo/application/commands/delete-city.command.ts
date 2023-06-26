import { ICityRepository } from '../../domain/repositories';
import { IUUIDGenerator } from '../../infra/uuid/contracts';
import { IDeleteCityCommand } from './contracts';

export class DeleteStateCommand implements IDeleteCityCommand {
  constructor(
    private readonly cityRepository: ICityRepository,
    private readonly uuid: IUUIDGenerator,
  ) {}

  async execute(input: IDeleteCityCommand.Input): Promise<any> {
    const { id } = input;

    const _city = await this.cityRepository.findOne({ id });

    _city.existsOrFail();

    _city.delete();

    await this.cityRepository.save(_city);
  }
}
