import { IStateRepository } from '../../domain/repositories';
import { IUUIDGenerator } from '../../infra/uuid/contracts';
import { IDeleteStateCommand } from './contracts';

export class DeleteStateCommand implements IDeleteStateCommand {
  constructor(
    private readonly stateRepository: IStateRepository,
    private readonly uuid: IUUIDGenerator,
  ) {}

  async execute(input: IDeleteStateCommand.Input): Promise<any> {
    const { id } = input;

    const _state = await this.stateRepository.findOne({ id });

    _state.existsOrFail();

    _state.delete();

    await this.stateRepository.save(_state);
  }
}
