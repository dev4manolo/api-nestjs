import { StateEntity } from 'src/modules/states/entities/state.entity';

export interface IStateRepository {
  save(input: IStateRepository.Save): Promise<void>;
}

export namespace IStateRepository {
  export type Properties = {
    id: string;
    name: string;
  };

  export type Save = StateEntity;
}
