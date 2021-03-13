import React from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SearchIcon from "@material-ui/icons/Search";
// import { useParams } from "react-router";

const handleSearch = (handler, loading) => {
  // const {term} = useParams();
  return {
    endAdornment: (
      <InputAdornment position="end">
        {loading ? <CircularProgress /> : <SearchIcon onClick={handler} />}
      </InputAdornment>
    ),
  };
};

const handlePassword = (handler, type) => {
  return {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handler}>
          {type === "password" ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  };
};

const acceptedSpecFieldNames = {
  password: handlePassword,
  search: handleSearch,
};

const handleSpecField = (name, handler, specProp) => {
  return acceptedSpecFieldNames[name]
    ? acceptedSpecFieldNames[name](handler, specProp)
    : null;
};

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  specHandler,
  specProp,
  required,
  // value,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      // TODO check error
      // value={value}
      // TODO change () =>
      InputProps={handleSpecField(name, specHandler, specProp)}
    />
  </Grid>
);

export default Input;
