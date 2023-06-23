export class CityEntity {
  private id: string;
  private stateId: string;
  private name: string;
  //TODO Senão encontrar finalidade, apagamos
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  constructor(input?: Partial<CityEntity.Properties>) {
    Object.assign(this, input);
  }

  create(input: Pick<CityEntity.Properties, 'id' | 'stateId' | 'name'>) {
    this.id = input.id;
    this.stateId = this.stateId;
    this.name = input.name;
    this.isActive = true;
    this.createdAt = new Date();

    return this;
  }
}

export namespace CityEntity {
  export type Properties = {
    id: string;
    stateId: string;
    name: string;
    //TODO Senão encontrar finalidade, apagamos
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  };
}
