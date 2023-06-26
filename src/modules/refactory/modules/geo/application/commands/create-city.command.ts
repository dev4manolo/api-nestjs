import { CityEntity } from '../../domain/entities';
import { ICityRepository } from '../../domain/repositories';
import { IUUIDGenerator } from '../../infra/uuid/contracts';
import { ICreateCityCommand } from './contracts';

export class CreateStateCommand implements ICreateCityCommand {
  constructor(
    private readonly cityRepository: ICityRepository,
    private readonly uuid: IUUIDGenerator,
  ) {}

  async execute(input: ICreateCityCommand.Input): Promise<any> {
    const { name, stateId } = input;

    const _city = await this.cityRepository.findOne({ name });

    if (_city.exists()) throw new Error();

    const city = new CityEntity().create({
      id: this.uuid.generate(),
      name,
      stateId,
    });

    await this.cityRepository.save(city);
  }
}
