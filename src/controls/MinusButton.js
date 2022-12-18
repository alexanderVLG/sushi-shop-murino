import styled from "styled-components";

export const MinusButtonContainer = styled.span `
  position: relative;
  display: inline-block;
  margin-right: .625rem;
  vertical-align: bottom;
  width: 1.625rem;
  height: 1.625rem;
  background-color: var(--white);
  border-radius: 50%
`;

export const MinusButton = styled.span `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: .8125rem;
  background-color: var(--light-black);
  border: 1px solid var(--light-black);
  border-radius: .3125rem;
`;
