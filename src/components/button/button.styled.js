import { Link } from "react-router-dom";
import styled from "styled-components";

export const buttonStyles = `
  border-radius: 24px;
  padding: 16px 24px;
  background-color: #7C5DFA;
  color: #FFFFFF;
  border: none
`;

export const LinkEl = styled(Link)`
  ${buttonStyles}
`;

export const ButtonEl = styled.button`
  ${buttonStyles}
`;
