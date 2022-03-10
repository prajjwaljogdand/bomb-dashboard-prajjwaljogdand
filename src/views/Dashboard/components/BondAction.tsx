import React from 'react';
import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core';
import useBombFinance from '../../../hooks/useBombFinance';
import useModal from '../../../hooks/useModal';
import ExchangeModal from '../../../views/Bond/components/ExchangeModal';
import ERC20 from '../../../bomb-finance/ERC20';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useCatchError from '../../../hooks/useCatchError';

interface ExchangeCardProps {
  action: string;
  fromToken: ERC20;
  fromTokenName: string;
  toToken: ERC20;
  toTokenName: string;
  priceDesc: string;
  onExchange: (amount: string) => void;
  disabled?: boolean;
  disabledDescription?: string;
}


// Bond action is component which accepts data in props for exchange between BBOND and BOMB 

const BondAction: React.FC<ExchangeCardProps> = ({
  action,
  fromToken,
  fromTokenName,
  toToken,
  toTokenName,
  priceDesc,
  onExchange,
  disabled = false,
  disabledDescription,
}) => {
  const catchError = useCatchError();

  const {
    contracts: { Treasury },
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(fromToken, Treasury.address);

  const balance = useTokenBalance(fromToken);
  const [onPresent, onDismiss] = useModal(
    <ExchangeModal
      title={action}
      description={priceDesc}
      max={balance}
      onConfirm={(value) => {
        onExchange(value);
        onDismiss();
      }}
      action={action}
      tokenName={fromTokenName}
    />,
  );
  
  return (
    <Grid item md={6}>
      <StyledCardActions>
        {approveStatus !== ApprovalState.APPROVED && !disabled ? (
          <Button
            className="newShinyButton"
            disabled={approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN}
            onClick={() => catchError(approve(), `Unable to approve ${fromTokenName}`)}
          >
            {`${action}`}
          </Button>
        ) : (
          <Button
            className={disabled ? 'newShinyButtonDisabled' : 'newShinyButton'}
            onClick={onPresent}
            disabled={disabled}
          >
            {disabledDescription || action}
          </Button>
        )}
      </StyledCardActions>
    </Grid>
  );
};

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[3]}px;
  width: 100%;
`;

export default BondAction;
