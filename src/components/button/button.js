import { ButtonEl, LinkEl } from "./button.styled";

export const Button = ({ to, ...props }) => {
  if (to) {
    return <LinkEl to={to} {...props} />;
  }
  return <ButtonEl {...props}  />;
};
