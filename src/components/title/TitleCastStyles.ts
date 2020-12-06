import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 6px;
  }
  ${[sizes.up('md')]} {
    &:not(:last-child) {
      margin-right: 60px;
    }
  }
  ${[sizes.up('xl')]} {
    &:not(:last-child) {
      margin-right: 84px;
    }
  }
`;

export const Photo = styled.div`
  height: 0;
  width: 70px;
  padding-top: 70px;
  position: relative;
  ${[sizes.up('md')]} {
    width: 80px;
    padding-top: 80px;
  }
  ${[sizes.up('xl')]} {
    width: 112px;
    padding-top: 112px;
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  top: 0;
  left: 0;
  width: 70px;
  height: auto;
  padding: 3px;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  ${fadeEffect}
  ${[sizes.up('md')]} {
    width: 80px;
    transition: all 350ms;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 8px rgba(255, 255, 255, 0.1);
    &:hover {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
        0 0 8px rgba(255, 255, 255, 0.2);
    }
  }
  ${[sizes.up('xl')]} {
    width: 112px;
    padding: 4.2px;
  }
`;

export const Name = styled.span`
  width: 70px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 50px 3px 0 3px;
  ${[sizes.up('md')]} {
    width: 80px;
  }
  ${[sizes.up('xl')]} {
    width: 112px;
    font-size: 22.4px;
    padding: 70px 4.2px 0 4.2px;
  }
`;
