import React, { Fragment, FunctionComponent } from "react";
import { Link } from "wouter";
import { Container, Button } from "../../desing-system";
import { useAuthStore } from "../../store/auth_store";
import { Calendar } from "./units/Calendar";
import Line from "./units/Line";
import UnitsApi, { Unit as UnitInstance } from "../../api/units.rest";
import { useQuery } from "react-query";
type ClientProps = {
  id: string;
};

export const Client: FunctionComponent<ClientProps> = ({ id }) => {
  const authParams = useAuthStore();

  const accessToken = authParams.accessToken || "";
  const client = authParams.client || "";
  const uid = authParams.uid || "";

  const repo = new UnitsApi({ accessToken, client, uid });

  const { isLoading, data, error } = useQuery("units_" + id, () => repo.fetchUnits(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching the units :( !</p>;

  return (
    <Fragment>
      {data?.map((unit: UnitInstance) => {
        return (
          <Container
            key={unit.id}
            size="3"
            flex="true"
            flexDirection="row"
            css={{ borderBottom: "1px solid $gray500", padding: "$4", height: "400px" }}
          >
            {unit.kind === "calendar" ? <Calendar id={unit.id}></Calendar> : <Line></Line>}
          </Container>
        );
      })}

      <Link href={"/client/" + id + "/units/new"}>
        <Button size="large" css={{ mr: 12 }}>
          Create view +
        </Button>
      </Link>
    </Fragment>
  );
};
