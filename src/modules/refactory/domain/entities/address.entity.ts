export class AddressEntity {
  private id: string;
  private cityId: string;
  private street: string;
  private number: string;
  private complement: string;
  private cep: string;
  //TODO Senão encontrar finalidade, apagamos
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;

  constructor(input?: Partial<AddressEntity.Properties>) {
    Object.assign(this, input);
  }

  create(
    input: Pick<
      AddressEntity.Properties,
      'id' | 'cityId' | 'street' | 'number' | 'cep' | 'complement'
    >,
  ) {
    this.id = input.id;
    this.cityId = input.cityId;
    this.street = input.street;
    this.number = input.number;
    this.complement = input.complement;
    this.cep = input.cep;
    this.isActive = true;
    this.createdAt = new Date();

    return this;
  }
}

export namespace AddressEntity {
  export type Properties = {
    id: string;
    cityId: string;
    street: string;
    number: string;
    complement: string;
    cep: string;
    //TODO Senão encontrar finalidade, apagamos
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  };
}
