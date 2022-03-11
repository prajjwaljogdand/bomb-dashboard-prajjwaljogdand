import { Box, Typography } from '@material-ui/core';
import React, {useMemo} from 'react';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import styled from 'styled-components';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import { roundAndFormatNumber } from '../../../0x';
import moment from 'moment';

function EpochData() {
  const currentEpoch = useCurrentEpoch();
  
  const lastEpochTWAP = useCashPriceInLastTWAP();
  const TVL = useTotalValueLocked();
  const cashStat = useCashPriceInEstimatedTWAP();
  const liveTWAp = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  const { to } = useTreasuryAllocationTimes();
  return (
    <Box sx={{ textAlign: 'center' }}>
      <StyledContainer>
        <Typography>Current Epoch </Typography>
        <Typography style={{fontSize : '36px',}}>{Number(currentEpoch)}</Typography>
      </StyledContainer>
      <StyledContainer>
        <Typography>Next Epoch in </Typography>
        <Typography style={{fontSize : '36px',}}><ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" /></Typography>
      </StyledContainer>
      <StyledContainer2>
        <Typography>Live TWAP : <span>{liveTWAp}</span><span style={{fontSize : '10px', color : 'yellow' }}>&nbsp;BTC / 10,000 BOMB</span> </Typography>
        <Typography>TVL : ${ roundAndFormatNumber(TVL, 2)} </Typography>
        <Typography>Last Epoch TWAP : <span>{roundAndFormatNumber(lastEpochTWAP.toNumber( )/100000000000000,4)}</span><span style={{fontSize : '10px', color : 'yellow' }}>&nbsp;BTC / 10,000 BOMB</span> </Typography>
      </StyledContainer2>
    </Box>
  );
}
const StyledContainer = styled.div`
  border-bottom : 1px solid white;
  padding: 3px;
  margin : 5px;
`;
const StyledContainer2 = styled.div`
  padding: 5px;
`;

export default EpochData;
