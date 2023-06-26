export interface IGetCitiesQuery {
  execute(): Promise<IGetCitiesQuery.Output[]>;
}

export namespace IGetCitiesQuery {
  export type Output = {
    id: string;
    name: string;
    stateId: string;
  };
}
