import { ICityRepository } from '../../domain/repositories';
import { IGetCitiesQuery } from './contracts';

export class GetStatesQuery implements IGetCitiesQuery {
  constructor(private readonly stateRepository: ICityRepository) {}

  async execute(): Promise<IGetCitiesQuery.Output[]> {
    const states = await this.stateRepository.find();

    return states.map((state) => {
      return {
        id: state.GetCities().id,
        name: state.GetCities().name,
        stateId: state.GetCities().stateId,
      };
    });
  }
}
