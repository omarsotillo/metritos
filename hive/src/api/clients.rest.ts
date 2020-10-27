import { IClientsApi, ICreateDto } from "./clients.interface";

export class Client {
  name: string | null;
  id: string | null;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

export default class ClientsApi implements IClientsApi {
  // TODO: Remove chain dependency with LoginHeaders to remove undefined/null
  accessToken: string;
  client: string;
  uid: string;

  constructor(data: { accessToken: string; client: string; uid: string }) {
    this.accessToken = data.accessToken;
    this.client = data.client;
    this.uid = data.uid;
  }

  public async fetchClients() {
    const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "/api/v1/clients", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: this.accessToken || "",
        client: this.client || "",
        uid: this.uid || "",
      },
    });

    // TODO: Better error handling and map
    if (response.ok) {
      const data = await response.json();
      return data.data.map((client: any) => new Client(client.attributes.name, client.attributes.id));
    } else {
      const errors = await response.json();
      throw new Error(errors.errors[0]);
    }
  }

  public async createClient(params: ICreateDto) {
    const response = await fetch(process.env.REACT_APP_BACKEND_HOST + "/api/v1/clients", {
      method: "POST",
      body: JSON.stringify({ name: params.name }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: this.accessToken || "",
        client: this.client || "",
        uid: this.uid || "",
      },
    });

    // TODO: Better error handling
    if (response.ok) {
      await response.json();
    } else {
      const errors = await response.json();
      throw new Error(errors.errors[0]);
    }
  }
}
