import React from "react";
import { Link, Route, useLocation } from "wouter";
import { Container, Header1 } from "../desing-system";
import { Card } from "./../desing-system";
import { Client } from "./dashboard/Client";
import NewClient from "./dashboard/NewClient";
import { NewUnit } from "./dashboard/NewUnit";
import ClientsApi, { Client as ClientInstance } from "../api/clients.rest";
import { useQuery } from "react-query";
import { useAuthStore } from "../store/auth_store";

export default function Dashboard() {
  const [location] = useLocation();
  const authParams = useAuthStore();

  const accessToken = authParams.accessToken || "";
  const client = authParams.client || "";
  const uid = authParams.uid || "";

  const repo = new ClientsApi({ accessToken, client, uid });

  const { isLoading, data, error } = useQuery("clients", () => repo.fetchClients());

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>Error!</p>;

  return (
    <main>
      <Container
        flex="true"
        flexDirection="row"
        justifyContent="center"
        css={{ borderBottom: "1px solid $gray500", padding: "$4" }}
      >
        <Header1>{`Current client: ${location}`}</Header1>
      </Container>
      <Container size="3" flex="true" flexDirection="row" justifyContent="center">
        {data?.map((instance: ClientInstance) => (
          <Link href={"/client/" + instance.id} key={instance.id}>
            <Card css={{ mr: "$20" }}>
              <Header1>{instance.name}</Header1>
            </Card>
          </Link>
        ))}
        <Link href="/new">
          <Card>
            <Header1>Start a new client + </Header1>
          </Card>
        </Link>
      </Container>
      <Route path="/client/:id">{(params) => <Client id={params.id} />}</Route>
      <Route path="/new">
        <NewClient />
      </Route>
      <Route path="/client/:id/units/new">{(params) => <NewUnit id={params.id} />}</Route>
    </main>
  );
}
