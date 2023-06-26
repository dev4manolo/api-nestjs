import { StateEntity } from '../entities/state.entity';

export interface IStateRepository {
  save(input: IStateRepository.Save): Promise<void>;
  findOne(input: IStateRepository.Find): Promise<StateEntity>;
  find(input?: IStateRepository.Find): Promise<StateEntity[]>;
}

export namespace IStateRepository {
  export type Properties = {
    id: string;
    name: string;
  };

  export type Save = StateEntity;
  export type Find = Partial<Properties>;
}
