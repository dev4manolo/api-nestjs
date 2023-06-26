export interface IDeleteStateCommand {
  execute(input: IDeleteStateCommand.Input): Promise<any>;
}
export namespace IDeleteStateCommand {
  export type Input = {
    id: string;
  };
}
