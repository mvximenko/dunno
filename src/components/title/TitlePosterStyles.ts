import styled from 'styled-components';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Img = styled.img<FadeEffectTypes>`
  width: 365px;
  height: 530px;
  filter: contrast(110%);
  -webkit-filter: contrast(110%);
  ${fadeEffect}
`;
