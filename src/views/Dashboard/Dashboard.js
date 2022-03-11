import React from 'react';
import Bonds from './components/Bonds';
import Page from '../../components/Page';
import { Switch } from 'react-router-dom';
import BombFinanceSummary from './components/BombFinanceSummary';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Page>
          <BombFinanceSummary />
          <Bonds />
        </Page>
      </Switch>
    </>
  );
};

export default Dashboard;
