import { ImgWrapper, LogoImg, SideBarWrapper, UserImg, UserImgWrapper } from "./side-bar.styled";
import Person from "../../assets/images/person.png"
import logo from "../../assets/images/logo.svg"

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <ImgWrapper>
        <LogoImg src={logo} alt="logo" />
      </ImgWrapper>
      <UserImgWrapper>
        <UserImg src={Person} alt="Person" />
      </UserImgWrapper>
    </SideBarWrapper>
  );
};
