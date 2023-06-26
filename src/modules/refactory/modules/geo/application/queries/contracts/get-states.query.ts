export interface IGetStatesQuery {
  execute(): Promise<IGetStatesQuery.Output[]>;
}

export namespace IGetStatesQuery {
  export type Output = {
    id: string;
    name: string;
  };
}
