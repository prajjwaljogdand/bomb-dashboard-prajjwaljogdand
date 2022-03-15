import React from 'react';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Spacer from '../../../components/Spacer';
import TokenFarm from './TokenFarm';

const Farms = () => {
  return (
    <Box>
      <StyledPaper>
        <Grid container md={12} spacing={0}>
          {/* Title Section */}
          <Grid item md={7}>
            <Title>Bomb Farms</Title>
            <SubTitle>Stake your LP tokens in our farms to start earning $BSHARE</SubTitle>
          </Grid>
        </Grid>
        <Spacer size="md" />
        <TokenFarm pair="BombBtcbLPBShareRewardPool" farm="BOMB-BTCB" />
        <TokenFarm pair="BshareBnbLPBShareRewardPool" farm="BSHARE-BNB" />
        <TokenFarm pair="BombBshareLPBShareRewardPool" farm="BOMB-BSHARE" />
      </StyledPaper>
    </Box>
  );
};

const StyledPaper = styled.div`
  max-width: 100%;
  background: rgba(35, 40, 75, 0.75);
  border: 1px solid #728cdf;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
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

export default Farms;
