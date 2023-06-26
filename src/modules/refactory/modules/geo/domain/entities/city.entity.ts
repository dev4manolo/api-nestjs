export class CityEntity {
  private id: string;
  private stateId: string;
  private name: string;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  constructor(input?: Partial<CityEntity.Properties>) {
    Object.assign(this, input);
  }

  exists(): boolean {
    return !!this.id;
  }

  existsOrFail() {
    if (!this.id) throw new Error('City no exists');
  }

  create(input: CityEntity.Create) {
    this.id = input.id;
    this.stateId = this.stateId;
    this.name = input.name;
    this.createdAt = new Date();

    return this;
  }

  delete() {
    this.deletedAt = new Date();
    return this;
  }

  GetCities() {
    return {
      id: this.id,
      name: this.name,
      stateId: this.stateId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}

export namespace CityEntity {
  export type Properties = {
    id: string;
    stateId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  };

  export type Create = Pick<Properties, 'id' | 'name' | 'stateId'>;
}
