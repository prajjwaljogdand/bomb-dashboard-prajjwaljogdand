import React, { useMemo } from 'react';
import useBombFinance from '../../../hooks/useBombFinance';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import { Button, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import { roundAndFormatNumber } from '../../../0x';
import TokenSymbol from '../../../components/TokenSymbol';
import styled from 'styled-components';

//util function to manage token data in array
const createData = (name, currentSupply, totalSupply, price, wallet)=> {
  return { name, currentSupply, totalSupply, price, wallet };
}



 const DataTable = ()=> {

  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();

  //BOMB DATA
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);


  //BSHARE DATA
  const bSharePriceInDollars = useMemo( () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),[bShareStats],);
  const bShareCirculatingSupply = useMemo( () => (bShareStats ? String(bShareStats.circulatingSupply) : null),[bShareStats],);
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);


  //BBOND DATA
  const tBondPriceInDollars = useMemo( () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null), [tBondStats],);
  const tBondCirculatingSupply = useMemo(() => (tBondStats ? String(tBondStats.circulatingSupply) : null),[tBondStats],);
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
 

  // Storing Data of Token in Array for easy iterations 
  const rows = [
    createData(
      'BOMB',
      roundAndFormatNumber(bombCirculatingSupply, 2),
      roundAndFormatNumber(bombTotalSupply, 2),
      bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--',
      4,
    ),
    createData(
      'BSHARE',
      roundAndFormatNumber(bShareCirculatingSupply, 2),
      roundAndFormatNumber(bShareTotalSupply, 2),
      bSharePriceInDollars ? bSharePriceInDollars : '-.--',
      4,
    ),
    createData(
      'BBOND',
      roundAndFormatNumber(tBondCirculatingSupply, 2),
      roundAndFormatNumber(tBondTotalSupply, 2),
      tBondPriceInDollars ? tBondPriceInDollars : '-.--',
      4,
    ),
  ];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">Current Supply</TableCell>
            <TableCell align="right">Total Supply&nbsp;</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">Wallet&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="left">
                <StyledIcon>
                  <TokenSymbol symbol={row.name} size={30} />
                </StyledIcon>
                <Styledspan>${row.name}</Styledspan>
              </TableCell>
              <TableCell align="right">{row.currentSupply}</TableCell>
              <TableCell align="right">{row.totalSupply}</TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right">
                {' '}
                <Button
                  onClick={() => {
                    bombFinance.watchAssetInMetamask(row.name);
                  }}
                >
                  {' '}
                  <b>+</b>&nbsp;&nbsp;
                  <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const StyledIcon = styled.span`
  background-color: #363746;
  font-size: 36px;
  height: 32px;
  width: 32px;
  border-radius: 95px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-right: 5px;
  position: relative;
  top: 10px;
`;

const Styledspan = styled.span`
  display: inline-block;
  position: relative;
  top: -16px;
  left: 40px;
`;
export default DataTable;