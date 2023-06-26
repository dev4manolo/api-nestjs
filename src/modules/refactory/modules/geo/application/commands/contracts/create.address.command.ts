export interface ICreateAddressCommand {
  execute(input: ICreateAddressCommand.Input): Promise<any>;
}
export namespace ICreateAddressCommand {
  export type Input = {
    name: string;
    cityId: string;
    street: string;
    number: string;
    complement: string;
    cep: string;
  };
}
