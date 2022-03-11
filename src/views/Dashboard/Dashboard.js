import React from 'react';
import Bonds from './components/Bonds';
import Page from '../../components/Page';
import { Switch } from 'react-router-dom';
import BombFinanceSummary from './components/BombFinanceSummary';
import { useWallet } from 'use-wallet'; 
import UnlockWallet from '../../components/UnlockWallet';
const Dashboard = () => {
  const { account } = useWallet();
  return (
    <>
      <Switch>
        <Page>
        {!!account ? (
          <>
          <BombFinanceSummary />
          <Bonds />
          </>
           ) : (
        <UnlockWallet />
      )}
        </Page>
      </Switch>
    </>
  );
};

export default Dashboard;
