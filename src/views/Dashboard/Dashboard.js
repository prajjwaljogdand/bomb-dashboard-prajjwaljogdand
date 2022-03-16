import React from 'react';
import Bonds from './components/Bonds';
import Page from '../../components/Page';
import { Switch } from 'react-router-dom';
import BombFinanceSummary from './components/BombFinanceSummary';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import Boardroom from './components/Boardroom';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import DashboardBG from '../../assets/img/dashboard-bg.png';
import ButtonBundle from './components/ButtonBundle';
import Farm from './components/Farms';
import { createGlobalStyle } from 'styled-components';


const Dashboard = () => {
  const { account } = useWallet();
  
  return (
    <>
      <Switch>
        <Page>
        <BackgroundImage />
          {!!account ? (
            <Grid container spacing={1}>
              <Grid item md={12}>
                <BombFinanceSummary />
              </Grid>
              <Grid item md={8} xs={12}>
                <ButtonBundle />
                <Boardroom />
              </Grid>
              <Grid item md={4} xs={12}>
                <StyledPaper>Latest News</StyledPaper>
              </Grid>
              <Grid item xs={12}>
              <Farm />
              </Grid>
              <Grid item xs={12}>
                <Bonds />
              </Grid>
            </Grid>
          ) : (
            <UnlockWallet />
          )}
        </Page>
      </Switch>
    </>
  );
};
const StyledPaper = styled.div`
  height: 330px;
  background: rgba(35, 40, 75, 0.75);
  border: 1px solid #728cdf;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
`;
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${DashboardBG}) repeat !important;
    background-size: cover !important;
    background-color: #0C1125 !important;
    padding : 0 !important;
    margin : 0 !important;
    background-position: center !important;
    width : 100%;
  }
`;

export default Dashboard;
