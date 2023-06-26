export interface ICreateStateCommand {
  execute(input: ICreateStateCommand.Input): Promise<any>;
}
export namespace ICreateStateCommand {
  export type Input = {
    name: string;
  };
}
