import { Unit } from "./units.rest";

export interface ICreateUnitDto {
  kind: string | undefined;
  measure_names: string[];
  client_uuid: string;
}

export interface IUnitsApi {
  // TODO: Move to Set (unique)
  fetchUnits(client_uuid: string): Promise<any> | Error;
  createUnit(params: ICreateUnitDto): Promise<void> | Error;
}
