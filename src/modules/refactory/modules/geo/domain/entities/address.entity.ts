export class AddressEntity {
  private id: string;
  private cityId: string;
  private street: string;
  private number: string;
  private complement: string;
  private cep: string;
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
    this.createdAt = new Date();

    return this;
  }

  delete() {
    this.deletedAt = new Date();
    return this;
  }

  exists(): boolean {
    return !!this.id;
  }

  existsOrFail() {
    if (!this.id) throw new Error('Address no exists');
  }

  GetAddress() {
    return {
      id: this.id,
      cityId: this.cityId,
      street: this.street,
      number: this.number,
      complement: this.complement,
      cep: this.cep,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
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
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  };
}
