import { Grid, Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import TokenSymbol from '../../../components/TokenSymbol';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useModal from '../../../hooks/useModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import Badge from '../../../components/Badge/Badge';
import DepositModal from '../../Bank/components/DepositModal';
import WithdrawModal from '../../Bank/components/WithdrawModal';
import useBank from '../../../hooks/useBank';
import useStatsForPool from '../../../hooks/useStatsForPool';
import useEarnings from '../../../hooks/useEarnings';
import useBombStats from '../../../hooks/useBombStats';
import useShareStats from '../../../hooks/usebShareStats';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useHarvest from '../../../hooks/useHarvest';
import useStake from '../../../hooks/useStake';
import useWithdraw from '../../../hooks/useWithdraw';

const TokenFarm = (props) => {
  const canClaimReward = useClaimRewardCheck();
  const bank = useBank(props.pair);
  const statsOnPool = useStatsForPool(bank);
  const earning = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const bombStats = useBombStats();
  const tShareStats = useShareStats();

  const tokenName = bank.earnTokenName === 'BSHARE' ? 'BSHARE' : 'BOMB';
  const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );

  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earning))).toFixed(2);
  const tokenBalance2 = useTokenBalance(bank.depositToken);
  const stakedBalance2 = useStakedBalance(bank.contract, bank.poolId);

  const earnedStakedTokenInDollars = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance2, bank.depositToken.decimal))
  ).toFixed(2);

  const { onReward } = useHarvest(bank);
  const { onStake } = useStake(bank);
  const { onWithdraw } = useWithdraw(bank);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance2}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onStake(amount);
        onDismissDeposit();
      }}
      tokenName={bank.depositTokenName}
    />,
  );
  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance2}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  return (
    <StyledBox style={{ border: '1px solid #728cdf' }}>
      <Grid container md={12} spacing={1}>
        {/* Title Section */}
        <Grid item md={1}>
          <TokenSymbol symbol={bank.depositToken.symbol} size={30} />
        </Grid>
        <Grid item md={7}>
          <Title>
            {props.farm}
            <Badge text="Recommended" />
          </Title>
        </Grid>

        {/* BoardRoom Data Section */}
        <Grid item md={4}>
          <PriceDiv>TVL : ${statsOnPool?.TVL}</PriceDiv>
        </Grid>
      </Grid>
      <DividerLine />
      <Grid container spacing={2}>
        <Grid item md={2} xs={6} sm={4}>
          <SubTitle>Daily Returns </SubTitle>
          <Title>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Title>
        </Grid>
        <Grid item md={2} xs={6} sm={4}>
          <SubTitle>Your Stake</SubTitle>
          <Title>
            <Title>
              <TokenSymbol symbol={bank.depositToken.symbol} size={20} style={{ margin: '10px' }} />
              {getDisplayBalance(stakedBalance2)}
            </Title>
            <SubTitle>{`≈ $${earnedStakedTokenInDollars}`}</SubTitle>
          </Title>
        </Grid>
        <Grid item md={2} xs={6} sm={4}>
          <SubTitle>Earned</SubTitle>
          <Title>
            {' '}
            <TokenSymbol symbol={bank.earnToken.symbol} size={20} style={{ marginRight: '5px' }} />
            {getDisplayBalance(earning)}
            <span style={{ fontSize: '12px', color: 'yellow' }}>${tokenName}</span>
          </Title>
          <SubTitle>{`≈ $${earnedInDollars}`}</SubTitle>
        </Grid>

        {/* Withdraw deposit and claim reward section */}
        <Grid item md={6} xs={12}>
          <StyledCardActions>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={6}>
                <Button
                  style={{ width: '100%' }}
                  className={'newShinyButton'}
                  disabled={bank.closedForStaking}
                  onClick={() => (bank.closedForStaking ? null : onPresentWithdraw())}
                >
                  Withdraw
                </Button>
              </Grid>
              <Grid item sm={4} xs={6}>
                <Button
                  style={{ width: '100%' }}
                  disabled={bank.closedForStaking}
                  onClick={() => (bank.closedForStaking ? null : onPresentDeposit())}
                  className={'newShinyButton'}
                >
                  Deposit
                </Button>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Button
                  style={{ width: '100%' }}
                  onClick={onReward}
                  className={earning.eq(0) || !canClaimReward ? 'newShinyButtonDisabled' : 'newShinyButton'}
                  disabled={earning.eq(0) || !canClaimReward}
                >
                  Claim Reward
                </Button>
              </Grid>
            </Grid>
          </StyledCardActions>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

const StyledBox = styled.div`
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
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  font-family: 'Nunito', sans-serif;
  color: white;
  font-weight: 700;
  font-size: 22px;
`;
const SubTitle = styled.div`
  font-family: 'Nunito', sans-serif;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;
const PriceDiv = styled.div`
  font-family: 'Nunito', sans-serif;
  color: white;
  text-align: right;
  width: 100%;
  margin-top: 3px;
`;

const DividerLine = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export default TokenFarm;
