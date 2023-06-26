export interface IDeleteAddressCommand {
  execute(input: IDeleteAddressCommand.Input): Promise<any>;
}
export namespace IDeleteAddressCommand {
  export type Input = {
    id: string;
  };
}
