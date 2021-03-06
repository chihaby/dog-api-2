import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const AutoSuggest = (props) => (
  <div>
    <Autocomplete
      id="combo-box-demo"
      options={props.autoList}
      // onChange={props.handleDropDownListChange}
      style={{ margin: "auto", width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          onSelect={props.handleSelectList}
          label="Search"
          variant="outlined"
          fullWidth
        />
      )}
    />
  </div>
);
