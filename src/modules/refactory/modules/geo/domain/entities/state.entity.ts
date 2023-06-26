import { CityEntity } from './city.entity';

export class StateEntity {
  private id: string;
  private name: string;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;
  private cities: CityEntity[] = [];

  constructor(input?: Partial<StateEntity.Properties>) {
    Object.assign(this, input);
  }

  exists(): boolean {
    return !!this.id;
  }

  existsOrFail() {
    if (!this.id) throw new Error('State no exists');
  }

  create(input: StateEntity.Create) {
    this.id = input.id;
    this.name = input.name;
    this.createdAt = new Date();

    if (input.cities && input.cities.length > 0) {
      this.cities = input.cities.map((city) =>
        new CityEntity().create({
          id: city.id,
          stateId: this.id,
          name: city.name,
        }),
      );
    }
  }

  update(input: StateEntity.Create) {
    this.id = input.id;
    this.name = input.name;
    this.createdAt = new Date();

    if (input.cities && input.cities.length > 0) {
      this.cities = input.cities.map((city) =>
        new CityEntity().create({
          id: city.id,
          stateId: this.id,
          name: city.name,
        }),
      );
    }
  }

  delete() {
    this.deletedAt = new Date();
    return this;
  }

  GetStates() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}

export namespace StateEntity {
  export type Properties = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    cities: CityEntity[];
  };

  export type Create = Pick<Properties, 'id' | 'name'> & {
    cities: CityEntity.Create[];
  };
}
