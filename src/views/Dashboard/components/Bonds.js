import React, { useCallback, useMemo } from 'react';
import DashboardBG from '../../../assets/img/dashboard-bg.png';
import { createGlobalStyle } from 'styled-components';
import { Grid, Box } from '@material-ui/core';
import styled from 'styled-components';
import useBombFinance from '../../../hooks/useBombFinance';
import useTokenBalance from '../../../hooks/useTokenBalance';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../../components/UnlockWallet';
import useBondStats from '../../../hooks/useBondStats';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import { useTransactionAdder } from '../../../state/transactions/hooks';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import { getDisplayBalance } from '../../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../../bomb-finance/constants';
import BondAction from './BondAction';
import TokenSymbol from '../../../components/TokenSymbol';



const Bonds = () => {

  const { account } = useWallet();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const cashPrice = useCashPriceInLastTWAP();
  const bondsPurchasable = useBondsPurchasable();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

  const handleBuyBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleRedeemBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, { summary: `Redeem ${amount} BBOND` });
    },
    [bombFinance, addTransaction],
  );

  const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  const price = Number(bondStat?.tokenInFtm).toFixed(8) / 10000 || '-';

  return (
    <div>
      <BackgroundImage />

      {!!account ? (
        <StyledBond>
          <Box sx={{ flexGrow: 1 }}>
            <StyledPaper>
              <Grid container spacing={2}>
                <Grid item md={7} container spacing={2}>
                  <Grid item container md={12}  >
                    <Grid item md={1}>
                      <TokenSymbol symbol={'BBOND'} size={50} />
                    </Grid>
                    <Grid item md={11}>
                      <Title>Bonds</Title>
                      <SubTitle>
                        BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
                      </SubTitle>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <SubTitle>Current Price: (Bomb)^2</SubTitle>
                    <Title>{`BBOND = ${price} BTC`}</Title>
                  </Grid>
                  <Grid item md={6}>
                    <SubTitle>Available to redeem:</SubTitle>
                    <Title> <TokenSymbol symbol={'BBOND'} size={20} />{getDisplayBalance(bondBalance)}</Title>
                  </Grid>
                </Grid>
                <Grid pt={4} item md={5} container spacing={2}>

                  {/* Purchase */}
                  <Grid item container md={12} spacing={2}>
                    <Grid item md={6}>
                      <SubTitle>
                        Purchase BBond <br />
                        Bomb is over peg
                      </SubTitle>
                    </Grid>
                    <BondAction
                      action="Purchase"
                      fromToken={bombFinance.BOMB}
                      fromTokenName="BOMB"
                      toToken={bombFinance.BBOND}
                      toTokenName="BBOND"
                      priceDesc={
                        !isBondPurchasable
                          ? 'BOMB is over peg'
                          : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'
                      }
                      onExchange={handleBuyBonds}
                      disabled={!bondStat || isBondRedeemable}
                    />
                  </Grid>

                  {/* Redeem */}
                  <Grid item container md={12} spacing={2}>
                    <Grid item md={6}>
                      <SubTitle>Redeem Bomb</SubTitle>
                    </Grid>
                    <BondAction
                      action="Redeem"
                      fromToken={bombFinance.BBOND}
                      fromTokenName="BBOND"
                      toToken={bombFinance.BOMB}
                      toTokenName="BOMB"
                      priceDesc={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
                      onExchange={handleRedeemBonds}
                      // disabled={!bondStat || bondBalance.eq(0) || !isBondRedeemable}
                      disabled={false}
                      disabledDescription={
                        !isBondRedeemable ? `Enabled when 10,000 BOMB > ${BOND_REDEEM_PRICE}BTC` : null
                      }
                    />
                  </Grid>
                  
                </Grid>
              </Grid>
            </StyledPaper>
          </Box>
        </StyledBond>
      ) : (
        <UnlockWallet />
      )}

    </div>
  );
};

const StyledBond = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;
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

export default Bonds;
