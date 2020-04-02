import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_GAME } from "~/js/local/routing";

export default () => {
  return (
    <div>
      top page.
      <p>
        <Link to={ROUTE_GAME}>game</Link>
      </p>
    </div>
  );
};
