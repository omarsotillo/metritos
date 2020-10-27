import { Router, useRouter, useLocation } from "wouter";
import React from "react";

export const NestedRoutes = (props: any) => {
  const router = useRouter();
  const [parentLocation] = useLocation();

  const nestedBase = `${router.base}${props.base}`;

  if (!parentLocation.startsWith(nestedBase)) return null;

  return (
    <Router base={nestedBase} key={nestedBase}>
      {props.children}
    </Router>
  );
};
