import styled from "styled-components";
import { Button } from "../button";
import svg from "../../assets/icons/plus.svg";
// import { Button } from "../button";

export const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 42px;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 950px) {
    margin-top: 130px;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 90px;
  }
`;

export const HeaderTitleWr = styled.div``;

export const HeaderHeading = styled.h1`
  margin: 0;
  font-size: 32px;

  @media only screen and (max-width: 450px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const InvoicesNumber = styled.p`
  margin: 0;
  font-size: 12px;
  margin-top: 8px;

  @media only screen and (max-width: 500px) {
    margin-top: 4px;
  }

  @media only screen and (max-width: 450px) {
    & > span {
      display: none;
    }
  }
`;

export const ButtonFilterWr = styled.div``;

export const HeaderSelect = styled.select`
  margin-right: 40px;
  background-color: transparent;
  border: none;

  @media only screen and (max-width: 300px) {
    margin-right: 25px;
  }

  @media only screen and (max-width: 270px) {
    margin-right: 10px;
  }
`;

export const HeaderOption = styled.option``;

export const ButtonAdd = styled(Button)`
  padding-left: 56px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    transform: translate(8px, -33%);
    width: 32px;
    height: 32px;
    background-image: url(${svg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    @media only screen and (max-width: 410px) {
      transform: translate(4px, -28%);
      width: 27px;
      height: 27px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding-right: 15px;
    padding-left: 45px;
  }

  @media only screen and (max-width: 410px) {
    padding-right: 10px;
    padding-left: 40px;
    padding-top: 13px;
    padding-bottom: 13px;

    & > span {
      display: none;
    }
  }
`;
