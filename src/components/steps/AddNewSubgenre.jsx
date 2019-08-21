import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setNewSubgenre } from '../../redux/actions';
import { getAddSubgenreData } from '../../redux/selectors';

// MUI
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const AddNewSubgenre = ({ setNewSubgenre, fields }) => (
  <Box py={4} px={4}>
    <Container maxWidth="md">
      <form>
        <TextField
          id="add-new-subgenre"
          label="Add new Subgenre"
          placeholder="Subgenre"
          value={fields.newSubgenre}
          onChange={e => setNewSubgenre('newSubgenre', e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={fields.checked}
              onChange={e => setNewSubgenre('checked', e.target.checked)}
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

const mapStateToProps = state => ({
  fields: getAddSubgenreData(state)
});

export default connect(
  mapStateToProps,
  { setNewSubgenre }
)(AddNewSubgenre);
