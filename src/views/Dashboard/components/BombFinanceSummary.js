import { Grid } from '@material-ui/core';
import React from 'react';
import DataTable from './DataTable';
import styled from 'styled-components';
import EpochData from './EpochData';
function BombFinanceSummary() {
  return (
    <StyledPaper>
      <Grid container spacing={2}>
        <Grid item>
          <DataTable />
        </Grid>
        <Grid item><EpochData />  </Grid>
        <Grid item>Graph</Grid>
      </Grid>
    </StyledPaper>
  );
}
const StyledPaper = styled.div`
  width: 100%;
  display: flex;
  background: rgba(35, 40, 75, 0.75);
  border: 1px solid #728cdf;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin-bottom :  10px;
`;

export default BombFinanceSummary;
