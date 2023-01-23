import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: fixed;
  left: 0;
  background: #373b53;
  border-radius: 0px 20px 20px 0px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1050px) {
    max-width: 80px;
  }

  @media only screen and (max-width: 950px) {
    flex-direction: row;
    bottom: auto;
    max-width: 100%;
    right: 0;
    border-radius: 0px 0px 0px 0px;
  }

  @media only screen and (max-width: 650px) {
    max-height: 72px;
  }
`;

export const ImgWrapper = styled.div``;

export const LogoImg = styled.img`
  @media only screen and (max-width: 1050px) {
    max-width: 80px;
  }

  @media only screen and (max-width: 650px) {
    max-height: 72px;
  }
`;

export const UserImgWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 103px;
    height: 1px;
    transform: translate(-31%, -24px);
    background-color: #494e6e;

    @media only screen and (max-width: 1050px) {
      width: 87px;
    }

    @media only screen and (max-width: 950px) {
      left: -65px;
      bottom: 33px;
      transform: rotate(90deg);
    }

    @media only screen and (max-width: 650px) {
      bottom: 37px;
      left: -57px;
    }
  }
  @media only screen and (max-width: 950px) {
    margin: auto 0;
    margin-right: 22px;
  }

  @media only screen and (max-width: 650px) {
    margin-right: 14px;
  }
`;

export const UserImg = styled.img`
  /* @media only screen and (max-width: 950px) {
    margin-left: auto;
  } */
`;
