import React from "react";
import { Router, Route, Redirect } from "wouter";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotMatchRoute from "./pages/NotMatchRoute";
import Logout from "./pages/Logout";
import Profile from "./pages/dashboard/Profile";

import { useAuthStore } from "./store/auth_store";
import Default from "./layouts/Default";
import { NestedRoutes } from "./utils/router_helpers";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? (
    <Default>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <NestedRoutes base="/dashboard">
            <Dashboard />
          </NestedRoutes>
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route>
            <NotMatchRoute />
          </Route>
        </Router>
      </ReactQueryCacheProvider>
    </Default>
  ) : (
    <Login />
  );
}

export default App;
