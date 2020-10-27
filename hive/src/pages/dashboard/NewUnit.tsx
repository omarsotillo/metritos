import React, { FormEvent, FunctionComponent, useState } from "react";
import { useQueryCache, useMutation } from "react-query";
import { ICreateUnitDto } from "../../api/units.interface";
import UnitsApi from "../../api/units.rest";
import { Box, Container, Header1, Button } from "../../desing-system";
import { useAuthStore } from "../../store/auth_store";

type NewUnitProps = {
  id: string;
};

export const NewUnit: FunctionComponent<NewUnitProps> = ({ id }) => {
  const [params, setParams] = useState<ICreateUnitDto>({ client_uuid: id, kind: "calendar", measure_names: [] });

  const authParams = useAuthStore();
  const cache = useQueryCache();

  const accessToken = authParams.accessToken || "";
  const client = authParams.client || "";
  const uid = authParams.uid || "";

  const repo = new UnitsApi({ accessToken, client, uid });

  const [mutate, { isLoading, isError }] = useMutation(repo.createUnit.bind(repo), {
    onSuccess: () => {
      cache.invalidateQueries("units_" + id);
    },
  });

  const onSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(params);
  };

  if (isLoading) {
    return <p>Sending request</p>;
  }

  return (
    <Box>
      <Container size="3" css={{ mt: "$4" }}>
        <Header1>Create a new unit</Header1>
        <form onSubmit={onSave}>
          <Container size="2" flex="true" flexDirection="column" justifyContent="center" css={{ mt: "$4" }}>
            <label> Kind (options calendar and line) </label>
            {/* TODO: MOVE TO SELECT */}
            <select
              value={params?.kind}
              onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
                setParams({
                  kind: ev.target.value,
                  client_uuid: params.client_uuid,
                  measure_names: params.measure_names, // SUPPORT ARRAY NATIVELY (Currently 1)
                })
              }
            >
              <option value="calendar">calendar</option>
              <option value="line">line</option>
            </select>

            <br />
            <label> Topic to show </label>
            <input
              type="text"
              value={params?.measure_names}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setParams({
                  kind: params.kind,
                  client_uuid: params.client_uuid,
                  measure_names: [ev.target.value], // SUPPORT ARRAY NATIVELY (Currently 1)
                })
              }
            />
            <br />
          </Container>
          <Button type="submit" size="large" css={{ mr: 12 }}>
            Create
          </Button>
        </form>
        {/* TODO: Improve error rendering */}
        {isError && <p>There was an error. Check console</p>}
      </Container>
    </Box>
  );
};
