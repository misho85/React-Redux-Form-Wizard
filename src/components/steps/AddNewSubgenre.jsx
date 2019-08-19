import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const AddNewSubgenre = () => {
  const [state, setState] = useState({
    checked: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Box py={4} px={4}>
      <Container maxWidth="md">
        <form>
          <TextField
            id="add-new-subgenre"
            label="Add new Subgenre"
            placeholder="Subgenre"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked}
                onChange={handleChange("checked")}
                value="checked"
                color="primary"
              />
            }
            label="Description is required for this subgenre"
          />
        </form>
      </Container>
    </Box>
  );
};

export default AddNewSubgenre;
