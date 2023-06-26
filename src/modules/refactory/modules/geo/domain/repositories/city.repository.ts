import { CityEntity } from '../entities/city.entity';

export interface ICityRepository {
  save(input: ICityRepository.Save): Promise<void>;
  findOne(input: ICityRepository.Find): Promise<CityEntity>;
  find(input?: ICityRepository.Find): Promise<CityEntity[]>;
}

export namespace ICityRepository {
  export type Properties = {
    id: string;
    stateId: string;
    name: string;
  };

  export type Save = CityEntity;
  export type Find = Partial<Properties>;
}
