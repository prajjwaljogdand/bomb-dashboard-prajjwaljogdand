import { Box, Grid, Button } from '@material-ui/core';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import Spacer from '../../../components/Spacer';
import TokenSymbol from '../../../components/TokenSymbol';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useBombFinance from '../../../hooks/useBombFinance';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import usebShareStats from '../../../hooks/usebShareStats';
import { roundAndFormatNumber } from '../../../0x';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';
import useModal from '../../../hooks/useModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useStakeToBoardroom from '../../../hooks/useStakeToBoardroom';
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import Badge from '../../../components/Badge/Badge';
import DepositModal from '../../Boardroom/components/DepositModal';
import WithdrawModal from '../../Boardroom/components/WithdrawModal';

const Boardroom = () => {
  const bombFinance = useBombFinance();
  const totalStaked = useTotalStakedOnBoardroom();
  const boardroomAPR = useFetchBoardroomAPR();

  const bShareStats = usebShareStats();
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );

  const stakedBalance = useStakedBalanceOnBoardroom();
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );

  const earnings = useEarningsOnBoardroom();
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const TVL = roundAndFormatNumber(Number(getDisplayBalance(totalStaked)) * Number(bSharePriceInDollars), 2);

  const { onReward } = useHarvestFromBoardroom();
  const canClaimReward = useClaimRewardCheck();

  const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);
  const { onStake } = useStakeToBoardroom();
  const { onWithdraw } = useWithdrawFromBoardroom();
  const canWithdrawFromBoardroom = useWithdrawCheck();
  const tokenBalance = useTokenBalance(bombFinance.BSHARE);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'BShare'}
    />,
  );
  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'BShare'}
    />,
  );

  return (
    <Box>
      <StyledPaper>
        <Grid container md={12} spacing={2}>
          {/* Title Section */}
          <Grid item md={1}>
            <TokenSymbol symbol={'BSHARE'} size={55} />
          </Grid>
          <Grid item sm={7} xs={12}>
            <Title>
              Boardroom <Badge text="Recommended" />{' '}
            </Title>
            <SubTitle>Stake BSHARE and earn BOMB every epoch</SubTitle>
          </Grid>

          {/* BoardRoom Data Section */}
          <Grid item md={4}>
            <PriceDiv className="leftAlign">TVL : ${TVL}</PriceDiv>
            <PriceDiv className="leftAlign">
              Total staked:{roundAndFormatNumber(getDisplayBalance(totalStaked), 2)}{' '}
              <TokenSymbol symbol={'BSHARE'} size={15} />
            </PriceDiv>
          </Grid>
        </Grid>

        <DividerLine />
        <Spacer size="md" />

        <Grid container spacing={2} className="boardroomContainer">
          <Grid item md={3} sm={6} xs={12}>
            <SubTitle>Annual percentage rate (APR) </SubTitle>
            <Title>{boardroomAPR.toFixed(2)}%</Title>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <SubTitle>Your Stake</SubTitle>
            <Title>
              <Title>{getDisplayBalance(stakedBalance)}</Title>
              <SubTitle>{`≈ $${tokenPriceInDollars}`}</SubTitle>
            </Title>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <SubTitle>Earned</SubTitle>
            <Title>{getDisplayBalance(earnings)}</Title>
            <SubTitle>{`≈ $${earnedInDollars}`}</SubTitle>
          </Grid>

          {/* Withdraw deposit and claim reward section */}
          <Grid item md={5} xs={12}>
            <StyledCardActions>
              <Button className={'newShinyButton'} disabled={!canWithdrawFromBoardroom} onClick={onPresentWithdraw}>
                Withdraw
              </Button>
              <Button onClick={onPresentDeposit} className={'newShinyButton'}>
                Deposit
              </Button>
            </StyledCardActions>
            <StyledCardActions style={{ marginTop: '8px' }}>
              <Button
                onClick={onReward}
                className={earnings.eq(0) || !canClaimReward ? 'newShinyButtonDisabled' : 'newShinyButton'}
                disabled={earnings.eq(0) || !canClaimReward}
              >
                Claim Reward
              </Button>
            </StyledCardActions>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
};

const StyledPaper = styled.div`
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
  line-height: 30px;
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
  @media only screen and (max-width: 731px) {
    text-align: left !important;
  }
`;

const DividerLine = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid white;
`;

export default Boardroom;
