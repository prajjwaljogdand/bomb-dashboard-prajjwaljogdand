import { Box, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
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

  // Fecting required data using custome hooks 

  const currentEpoch = useCurrentEpoch();
  const lastEpochTWAP = useCashPriceInLastTWAP();
  const EstimatedTWAP = useCashPriceInEstimatedTWAP();
  const liveTWAp = useMemo(() => (EstimatedTWAP ? Number(EstimatedTWAP.priceInDollars).toFixed(4) : null), [EstimatedTWAP],);
  const TVL = useTotalValueLocked();
  const { to } = useTreasuryAllocationTimes();

  return (

    <Box sx={{ textAlign: 'center' }}>

      {/* current Epoch Number section */}
      <StyledContainer>
        <Typography>Current Epoch </Typography>
        <Typography style={{ fontSize: '36px' }}>{Number(currentEpoch)}</Typography>
      </StyledContainer>

      {/* Epoch Counter */}
      <StyledContainer>
        <Typography>Next Epoch in </Typography>
        <Typography style={{ fontSize: '36px' }}>
          <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
        </Typography>
      </StyledContainer>

      {/* Epoch Data */}
      <StyledContainer2>
        <Typography>
          Live TWAP : <span>{liveTWAp}</span>
          <span style={{ fontSize: '10px', color: 'yellow' }}>&nbsp;BTC / 10,000 BOMB</span>{' '}
        </Typography>
        <Typography>TVL : ${roundAndFormatNumber(TVL, 2)} </Typography>
        <Typography>
          Last Epoch TWAP : <span>{roundAndFormatNumber(lastEpochTWAP.toNumber() / 100000000000000, 4)}</span>
          <span style={{ fontSize: '10px', color: 'yellow' }}>&nbsp;BTC / 10,000 BOMB</span>{' '}
        </Typography>
      </StyledContainer2>

    </Box>
  );
}

const StyledContainer = styled.div`
  border-bottom: 1px solid white;
  padding: 8px;
  margin: 8px;
`;
const StyledContainer2 = styled.div`
  padding: 8px;
`;

export default EpochData;
