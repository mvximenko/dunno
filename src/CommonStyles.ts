import { css } from 'styled-components';

export interface FadeEffectTypes {
  fade: boolean;
}

export const fadeEffect = css<FadeEffectTypes>`
  ${({ fade }) =>
    fade
      ? `
    animation: fadein 0.5s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `
      : `
      visibility: hidden;
    `}
`;
