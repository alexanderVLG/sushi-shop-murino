import styled from "styled-components";

export const PlusButtonContainer = styled.span `
  position: relative;
  display: inline-block;
  margin-left: .625rem;
  vertical-align: bottom;
  width: 1.625rem;
  height: 1.625rem;
  background-color: var(--dkorange);
  border-radius: 50%
  `;

export const PlusButtonArrows = styled.span `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: .8125rem;
  background-color: var(--light-gray);
  border: 1px solid var(--light-gray);
  border-radius: 5px;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    display: block;
    width: .8125rem;
    background-color: var(--light-gray);
    border: 1px solid var(--light-gray);
    border-radius: 5px;
  }
`;