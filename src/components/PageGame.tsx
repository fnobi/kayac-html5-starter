import React from "react";
import { css } from "@emotion/core";
import { px, percent } from "~/js/lib/cssUtil";

const wrapperStyle = css({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: px(0),
  left: px(0),
  width: percent(100),
  height: percent(100)
});

export default () => {
  return (
    <div css={wrapperStyle}>
      <div>game page.</div>
    </div>
  );
};
