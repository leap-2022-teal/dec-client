import React, { CSSProperties } from "react";

import Select from "react-select";
import { ColourOption, colourOptions, GroupedOption, groupedOptions } from "./docs/data";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);
const NumberSelector = () => <Select<ColourOption, false, GroupedOption> defaultValue={colourOptions[0]} options={groupedOptions} formatGroupLabel={formatGroupLabel} />;

export default NumberSelector;
