import React, { useMemo }  from 'react';
import useBombFinance from '../../../hooks/useBombFinance';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import {Button, TableRow, TableHead, TableContainer, TableCell, TableBody, Table   } from '@material-ui/core';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import { roundAndFormatNumber } from '../../../0x';


function createData(name, currentSupply, totalSupply, price, wallet) {
  return { name, currentSupply, totalSupply, price, wallet };
}


export default function DataTable() {
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);




  const rows = [
    createData('BOMB', roundAndFormatNumber(bombCirculatingSupply, 2),roundAndFormatNumber(bombTotalSupply, 2), (bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'), 4),
    createData('BSHARE', roundAndFormatNumber(bShareCirculatingSupply, 2), roundAndFormatNumber(bShareTotalSupply, 2), (bSharePriceInDollars ? bSharePriceInDollars : '-.--'), 4),
    createData('BBOND', roundAndFormatNumber(tBondCirculatingSupply, 2), roundAndFormatNumber(tBondTotalSupply, 2), tBondPriceInDollars ? tBondPriceInDollars : '-.--', 4),
  ]; 

  return (
    <TableContainer >
    
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
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                ${row.name}
              </TableCell>
              <TableCell align="right">{row.currentSupply}</TableCell>
              <TableCell align="right">{row.totalSupply}</TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right"> <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask(row.name);
                }}
                
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px', }} src={MetamaskFox} />
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}

