import React, { useMemo } from 'react';
import useTokenBalance from '../../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../../utils/formatBalance';
import styled from 'styled-components';
import useBombFinance from '../../../hooks/useBombFinance';
import TokenSymbol from '../../../components/TokenSymbol';
import { Grid } from '@material-ui/core';
import { Chart } from 'react-google-charts';

const WalletSummary = () => {
  const bombFinance = useBombFinance();

  const bombBalance = useTokenBalance(bombFinance.BOMB);
  const displayBombBalance = useMemo(() => getDisplayBalance(bombBalance, 18, 2), [bombBalance]);

  const bshareBalance = useTokenBalance(bombFinance.BSHARE);
  const displayBshareBalance = useMemo(() => getDisplayBalance(bshareBalance, 18, 2), [bshareBalance]);

  const bbondBalance = useTokenBalance(bombFinance.BBOND);
  const displayBbondBalance = useMemo(() => getDisplayBalance(bbondBalance, 18, 2), [bbondBalance]);

  const xbombBalance = useTokenBalance(bombFinance.XBOMB);
  const displayXbombBalance = useMemo(() => getDisplayBalance(xbombBalance, 18, 2), [xbombBalance]);

  const bombBtcLpBalance = useTokenBalance(bombFinance.BOMBBTCBLP);
  const displayBombBtcLpBalance = useMemo(() => getDisplayBalance(bombBtcLpBalance, 18, 2), [bombBtcLpBalance]);

  const bshareBnbBalance = useTokenBalance(bombFinance.BSHAREBNBLP);
  const displayBshareBnbBalance = useMemo(() => getDisplayBalance(bshareBnbBalance, 18, 2), [bshareBnbBalance]);

  //   const xbombBalance = useTokenBalance(bombFinance.XBOMB);
  //   const displayXbombBalance = useMemo(() => getDisplayBalance(xbombBalance, 18, 2), [xbombBalance]);

  const data = [
    ['Task', 'Hours per Day'],
    ['BOMB', Math.round(displayBombBalance) ? Math.round(displayBombBalance) : 1],
    ['BSHARE', Math.round(displayBshareBalance) ? Math.round(displayBshareBalance) : 1],
    ['BBOND', Math.round(displayBbondBalance) ? Math.round(displayBbondBalance) : 1],
    ['XBOMB', Math.round(displayXbombBalance) ? Math.round(displayXbombBalance) : 1],
    ['BOMB-BTCB', Math.round(displayBombBtcLpBalance) ? Math.round(displayBombBtcLpBalance) : 1],
    ['BSHARE-BNB', Math.round(displayBshareBnbBalance) ? Math.round(displayBshareBnbBalance) : 1],
  ];
  const options = {
    legend: 'none',
    backgroundColor: 'transparent',
    pieHole: 0.5,
    is3D: false,
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Chart chartType="PieChart" width="100%" height="200px" data={data} options={options} />
        </Grid>
        <Grid item xs={6}>
          <StyledBalance>
            <TokenSymbol symbol="BOMB" size={20} />
            <StyledValue>BOMB : {displayBombBalance}</StyledValue>
          </StyledBalance>
        </Grid>
        <Grid item xs={6}>
          <StyledBalance>
            <TokenSymbol symbol="BSHARE" size={20} />
            <StyledValue>BSHARE: {displayBshareBalance}</StyledValue>
          </StyledBalance>
        </Grid>
        <Grid item xs={6}>
          <StyledBalance>
            <TokenSymbol symbol="BBOND" size={20} />
            <StyledValue>BBOND: {displayBbondBalance}</StyledValue>
          </StyledBalance>
        </Grid>
        <Grid item xs={6}>
          <StyledBalance>
            <TokenSymbol symbol="XBOMB" size={20} />
            <StyledValue>XBOMB: {displayXbombBalance}</StyledValue>
          </StyledBalance>
        </Grid>
        <Grid item xs={6}>
          <StyledBalance>
            <TokenSymbol symbol="BOMB-BTCB-LP" size={20} />
            <StyledValue>BOMB-BTCB: {displayBombBtcLpBalance}</StyledValue>
          </StyledBalance>
        </Grid>
        <Grid item xs={6}>
          <StyledBalance>
            <TokenSymbol symbol="BSHARE-BNB-LP" size={20} />
            <StyledValue>BSHARE-BNB: {displayBshareBnbBalance}</StyledValue>
          </StyledBalance>
        </Grid>
      </Grid>
    </div>
  );
};

const StyledValue = styled.span`
  //color: ${(props) => props.theme.color.grey[300]};
  font-weight: 700;
  font-size: 12px;
  margin-left: 10px;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export default WalletSummary;
