import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconDiscord } from '../../../assets/img/discord.svg';

const ButtonBundle = () => {
  return (
    <StyledPaper>
      <Grid container spacing={1} sx={{ justifyContent: 'space-between' }} md={12}>
        <Grid item md={12}>
          <StyledLink
            href="/"
            style={{
              background:
                'radial-gradient(59345.13% 4094144349.28% at 39511.5% -2722397851.45%, rgba(0, 245, 171, 0.5) 0%, rgba(0, 173, 232, 0.5) 100%)',
              color: 'white',
              fontWeight: '800',
            }}
          >
            Invest Now
          </StyledLink>
        </Grid>

        {/* Discord */}
        <Grid item md={6}>
          <StyledLink href="http://discord.bomb.money/" rel="noopener noreferrer" target="_blank">
            <IconDiscord style={{ fill: '#dddfee', height: '20px', position: 'relative', top: '5px' }} />
            Chat on Discord
          </StyledLink>
        </Grid>

        {/* Read Docs */}
        <Grid item md={6}>
          <StyledLink href="https://docs.bomb.money/welcome-start-here/readme" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon="fa-solid fa-file-lines" />
            Read Docs
          </StyledLink>
        </Grid>

      </Grid>
    </StyledPaper>
  );
};

const StyledLink = styled.a`
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #728cdf;
  box-sizing: border-box;
  backdrop-filter: blur(25px);
  text-decoration: none;
  display: block;
  color: black;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
`;
const StyledPaper = styled.div`
  max-width: 800px;
  box-sizing: border-box;
  color: white;
  margin-bottom: 10px;
`;

export default ButtonBundle;
