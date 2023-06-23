import { CityEntity } from '../entities/city.entity';

export interface ICityRepository {
  save(input: ICityRepository.Save): Promise<void>;
}

export namespace ICityRepository {
  export type Properties = {
    id: string;
    stateId: string;
    name: string;
  };

  export type Save = CityEntity;
}
