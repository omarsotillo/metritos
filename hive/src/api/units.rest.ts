import { ICreateUnitDto, IUnitsApi } from "./units.interface";

export class Unit {
  kind: string | null;
  id: string;

  constructor(kind: string, id: string) {
    this.kind = kind;
    this.id = id;
  }
}

export default class UnitsApi implements IUnitsApi {
  // TODO: Remove chain dependency with LoginHeaders to remove undefined/null
  accessToken: string;
  client: string;
  uid: string;

  constructor(data: { accessToken: string; client: string; uid: string }) {
    this.accessToken = data.accessToken;
    this.client = data.client;
    this.uid = data.uid;
  }

  public async fetchUnits(client_uuid: string) {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_HOST +
        "/api/v1/clients/" +
        client_uuid +
        "/units",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: this.accessToken || "",
          client: this.client || "",
          uid: this.uid || "",
        },
      }
    );

    // TODO: Better error handling and map
    if (response.ok) {
      const data = await response.json();
      return data.data.map(
        (unit: any) => new Unit(unit.attributes.kind, unit.id)
      );
    } else {
      const errors = await response.json();
      throw new Error(errors.errors[0]);
    }
  }

  public async createUnit(params: ICreateUnitDto) {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_HOST +
        "/api/v1/clients/" +
        params.client_uuid +
        "/units",
      {
        method: "POST",
        body: JSON.stringify({
          kind: params.kind,
          measure_names: params.measure_names,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: this.accessToken || "",
          client: this.client || "",
          uid: this.uid || "",
        },
      }
    );

    // TODO: Better error handling
    if (response.ok) {
      await response.json();
    } else {
      const errors = await response.json();
      throw new Error(errors.errors[0]);
    }
  }

  public async fetchMetricsFromUnit(unit_id: string) {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_HOST + "/api/v1/units/" + unit_id,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          access_token: this.accessToken || "",
          client: this.client || "",
          uid: this.uid || "",
        },
      }
    );

    // TODO: Better error handling and map
    if (response.ok) {
      return await response.json();
    } else {
      const errors = await response.json();
      throw new Error(errors.errors[0]);
    }
  }
}
