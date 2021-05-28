import React from "react";
import {  Checkbox } from "semantic-ui-react";
import { COLUMN_LAYOUT } from "./constants";

/* Layout Toggle to have the switch between the two layouts*/
export const LayoutToggle = ({
  setChecked,
  checked,
}) => {
  return (
    <div className="layout-toggle">
      <Checkbox
        toggle
        label={COLUMN_LAYOUT}
        className="display-toggle"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </div>
  );
};
