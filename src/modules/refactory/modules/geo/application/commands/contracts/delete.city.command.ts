export interface IDeleteCityCommand {
  execute(input: IDeleteCityCommand.Input): Promise<any>;
}
export namespace IDeleteCityCommand {
  export type Input = {
    id: string;
  };
}
