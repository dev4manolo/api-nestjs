export class StateEntity {
  private id: string;
  private name: string;
  //TODO Senão encontrar finalidade, apagamos
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  constructor(input?: Partial<StateEntity.Properties>) {
    Object.assign(this, input);
  }

  create(input: Pick<StateEntity.Properties, 'id' | 'name'>) {
    this.id = input.id;
    this.name = input.name;
    this.isActive = true;
    this.createdAt = new Date();

    return this;
  }
}

export namespace StateEntity {
  export type Properties = {
    id: string;
    name: string;
    //TODO Senão encontrar finalidade, apagamos
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  };
}
