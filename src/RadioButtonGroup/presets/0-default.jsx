import * as React from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import RadioButton from "../../RadioButton/RadioButton";

export default (
<RadioButtonGroup defaultSelected="react.js" name="JavaScript" key="1">
  <RadioButton labelText="React.js" value="react.js" key="2" />
  <RadioButton labelText="Angular" value="angular" key="3" />
  <RadioButton labelText="Vue.js" value="vue" key="4" />
</RadioButtonGroup>
);
