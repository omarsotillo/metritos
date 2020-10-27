import React, { useEffect } from "react";
import { Box, Container, Header1 } from "../desing-system";
import { useAuthStore } from "../store/auth_store";

export default function Logout() {
  const { logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      logout();
    }
  }, [logout, isAuthenticated]);

  return (
    <Box>
      <Container size="3" css={{ mt: "$4" }}>
        <Header1>You have correctly logout</Header1>
      </Container>
    </Box>
  );
}
