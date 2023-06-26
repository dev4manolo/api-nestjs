import { IAddressRepository } from '../../domain/repositories';
import { IGetAddressQuery } from './contracts';

export class GetStatesQuery implements IGetAddressQuery {
  constructor(private readonly stateRepository: IAddressRepository) {}

  async execute(): Promise<IGetAddressQuery.Output[]> {
    const states = await this.stateRepository.find();

    return states.map((state) => {
      return {
        id: state.GetAddress().id,
        cityId: state.GetAddress().cityId,
        street: state.GetAddress().street,
        number: state.GetAddress().number,
        complement: state.GetAddress().complement,
        cep: state.GetAddress().cep,
      };
    });
  }
}
