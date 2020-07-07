import styled from 'styled-components';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 6px;
  }
`;

export const Photo = styled.div`
  position: relative;
  height: 0;
  width: 70px;
  padding-top: 70px;
`;

export const Img = styled.img<FadeEffectTypes>`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 70px;
  padding: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  ${fadeEffect}
`;

export const Name = styled.span`
  width: 70px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  padding: 50px 3px 0 3px;
`;
