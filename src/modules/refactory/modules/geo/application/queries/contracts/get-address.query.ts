export interface IGetAddressQuery {
  execute(): Promise<IGetAddressQuery.Output[]>;
}

export namespace IGetAddressQuery {
  export type Output = {
    id: string;
    cityId: string;
    street: string;
    number: string;
    complement: string;
    cep: string;
  };
}
