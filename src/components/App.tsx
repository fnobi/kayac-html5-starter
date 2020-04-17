import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageTop from "~/components/PageTop";
import PageGame from "~/components/PageGame";
import { ROUTE_GAME, ROUTE_TOP } from "~/js/local/routing";

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTE_GAME}>
          <PageGame />
        </Route>
        <Route path={ROUTE_TOP}>
          <PageTop />
        </Route>
      </Switch>
    </HashRouter>
  );
};
