import { StateEntity } from '../../domain/entities';
import { IStateRepository } from '../../domain/repositories';
import { IUUIDGenerator } from '../../infra/uuid/contracts';
import { ICreateStateCommand } from './contracts';

export class CreateStateCommand implements ICreateStateCommand {
  constructor(
    private readonly stateRepository: IStateRepository,
    private readonly uuid: IUUIDGenerator,
  ) {}

  async execute(input: ICreateStateCommand.Input): Promise<any> {
    const { name } = input;

    const _state = await this.stateRepository.findOne({ name });

    if (_state.exists()) throw new Error();

    const state = new StateEntity().create({
      id: this.uuid.generate(),
      name,
      cities: [],
    });

    await this.stateRepository.save(state);
  }
}
