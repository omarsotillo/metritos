import React, { useState, FormEvent } from "react";
import { Box, Button, Container, Header1 } from "../desing-system";
import { useMutation } from "react-query";
import AuthApi from "../api/auth.rest";
import { ILoginDto } from "../api/auth.interface";
import { useAuthStore } from "../store/auth_store";

export default function Login() {
  const repo = new AuthApi();
  const [params, setParams] = useState<ILoginDto>({ email: "", password: "" });
  const { authenticate } = useAuthStore();

  const [mutate, { isLoading, isError }] = useMutation(repo.postLogin, {
    onSuccess: (headers) => {
      authenticate(headers);
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
        <Header1>Log in to see your units!</Header1>
        <form onSubmit={onSave}>
          <Container size="2" flex="true" flexDirection="column" justifyContent="center" css={{ mt: "$4" }}>
            <label>
              Email:
              <input
                type="email"
                value={params?.email}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setParams({
                    email: ev.target.value,
                    password: params?.password,
                  })
                }
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                value={params?.password}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setParams({ email: params?.email, password: ev.target.value })
                }
              />
            </label>
            <br />
            <Button type="submit" size="large" css={{ mr: 12 }}>
              Login +
            </Button>
          </Container>
        </form>
        {/* TODO: Improve error rendering */}
        {isError && <p>There was an error. Check console</p>}
      </Container>
    </Box>
  );
}
