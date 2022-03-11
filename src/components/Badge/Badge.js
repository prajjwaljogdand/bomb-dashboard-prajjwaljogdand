import React from 'react';
import styled from 'styled-components';

const Badge = (props) => {
  return <Rect>{props.text}</Rect>;
};

const Rect = styled.span`
  background: rgba(0, 232, 162, 0.5);
  border-radius: 3px;
  font-size: 5px;
  width: 101px;
  height: 16px;
  padding : 0 10px;
  position : relative;
  top: -3px;
  text-align: center;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  box-shadow: 0.1px 0.1px 5px rgba(0, 232, 162, 0.5);
`;

export default Badge;
