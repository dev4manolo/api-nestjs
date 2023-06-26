import { IStateRepository } from '../../domain/repositories';
import { IGetStatesQuery } from './contracts';

export class GetStatesQuery implements IGetStatesQuery {
  constructor(private readonly stateRepository: IStateRepository) {}

  async execute(): Promise<IGetStatesQuery.Output[]> {
    const states = await this.stateRepository.find();

    return states.map((state) => {
      return {
        id: state.GetStates().id,
        name: state.GetStates().name,
      };
    });
  }
}
