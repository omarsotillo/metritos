import React, { Fragment } from "react";
import { Container, Button } from "../desing-system";
import { useAuthStore } from "../store/auth_store";
import { useLocation } from "wouter";

export default function Default(props: any) {
  const [location, setLocation] = useLocation();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const logout = () => {
    return setLocation("/logout");
  };

  const profile = () => {
    return setLocation("/profile");
  };

  return (
    <Fragment>
      <Container
        flex="true"
        flexDirection="row"
        justifyContent="center"
        css={{ borderBottom: "1px solid $gray500", padding: "$4" }}
      >
        {isAuthenticated && (
          <Fragment>
            <Button size="large" css={{ mr: 12 }} onClick={logout}>
              Logout
            </Button>

            <Button size="large" onClick={profile}>
              WIP: Profile
            </Button>
          </Fragment>
        )}
      </Container>
      <main>{props.children}</main>
    </Fragment>
  );
}
