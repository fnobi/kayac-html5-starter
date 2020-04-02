import React from "react";
import { css } from "@emotion/core";
import { px, percent } from "~/js/lib/cssUtil";

const keyboardStyle = css({
  position: "fixed",
  bottom: px(0),
  height: px(300),
  width: percent(100),
  backgroundColor: "#0f0"
});

export default () => {
  return (
    <div>
      game page.
      <div css={keyboardStyle} />
    </div>
  );
};
