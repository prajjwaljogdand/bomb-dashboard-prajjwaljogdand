import { Grid } from '@material-ui/core';
import React from 'react';
import DataTable from './DataTable';
import styled from 'styled-components';
import EpochData from './EpochData';
const BombFinanceSummary = ()=> {

  return (
    <StyledPaper>
      <div style={{ textAlign: 'center', borderBottom: '0.5px solid grey', paddingBottom: '10px' }}>
        Bomb Finance Summary
      </div>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <DataTable />
        </Grid>
        <Grid item md={4}>
          <EpochData />
        </Grid>
      </Grid>
    </StyledPaper>
  );
  
}
const StyledPaper = styled.div`
  width: 100%;
  background: rgba(35, 40, 75, 0.75);
  border: 1px solid #728cdf;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
`;

export default BombFinanceSummary;
