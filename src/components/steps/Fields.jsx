import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Field = styled(Button)`
  padding: 7px 16px;
  @media screen and (min-width: 960px) {
    padding: 14px 60px;
  }
`;

const Fields = () => {
  const FormRow = () => (
    <>
      <Grid align="center" item xs={3}>
        <Field variant="outlined">Item</Field>
      </Grid>
      <Grid align="center" item xs={3}>
        <Field variant="outlined">Item</Field>
      </Grid>
      <Grid align="center" item xs={3}>
        <Field variant="outlined">Item</Field>
      </Grid>
      <Grid align="center" item xs={3}>
        <Field variant="outlined">Item</Field>
      </Grid>
    </>
  );

  return (
    <Box py={4} px={4}>
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Fields;
