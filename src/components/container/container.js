import { ContainerEl } from "./container.styled";

export const Container = ({children}) => {
  return (
    <>
      <ContainerEl>
        {children}
      </ContainerEl>
    </>
  );
};
