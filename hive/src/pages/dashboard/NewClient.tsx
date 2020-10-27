import React, { FormEvent, useState } from "react";
import { useMutation, useQueryCache } from "react-query";
import { ICreateDto } from "../../api/clients.interface";
import ClientsApi from "../../api/clients.rest";
import { Box, Button, Container, Header1 } from "../../desing-system";
import { useAuthStore } from "../../store/auth_store";

export default function NewProject() {
  const [params, setParams] = useState<ICreateDto>({ name: "" });

  const authParams = useAuthStore();
  const cache = useQueryCache();

  const accessToken = authParams.accessToken || "";
  const client = authParams.client || "";
  const uid = authParams.uid || "";

  const repo = new ClientsApi({ accessToken, client, uid });

  const [mutate, { isLoading, isError }] = useMutation(repo.createClient.bind(repo), {
    onSuccess: () => {
      cache.invalidateQueries("clients");
      // TODO: Redirect to client view
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
        <Header1>Create a new client</Header1>
        <form onSubmit={onSave}>
          <Container size="2" flex="true" flexDirection="column" justifyContent="center" css={{ mt: "$4" }}>
            <label>Name of the new client (min_length: 6, max_length: 64)</label>
            <input
              type="text"
              value={params?.name}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setParams({ name: ev.target.value })}
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
}
