import { ImgWr, SideBarWr, UserImgWr } from "./side-bar.styled";
import Person from "../../assets/images/person.png"
import Shape from "../../assets/images/shape.svg"

export const SideBar = () => {
  return (
    <SideBarWr>
      <ImgWr>
        <img src={Shape} alt="shape" />
      </ImgWr>
      <UserImgWr>
        <img src={Person} alt="Person" />
      </UserImgWr>
    </SideBarWr>
  );
};
