export interface ICreateDto {
  name: string | undefined;
}

export interface IClientsApi {
  // TODO: Move to Set (unique)
  fetchClients(): Promise<any> | Error;
  createClient(params: ICreateDto): Promise<void> | Error;
}
