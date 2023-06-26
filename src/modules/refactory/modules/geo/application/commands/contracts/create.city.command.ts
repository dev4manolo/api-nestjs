export interface ICreateCityCommand {
  execute(input: ICreateCityCommand.Input): Promise<any>;
}
export namespace ICreateCityCommand {
  export type Input = {
    name: string;
    stateId: string;
  };
}
