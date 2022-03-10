import React from 'react';
import Bonds from './components/Bonds';
import Page from '../../components/Page';
import { Switch } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Page>
          <Bonds />
        </Page>
      </Switch>
    </>
  );
};

export default Dashboard;
