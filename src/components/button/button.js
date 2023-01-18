import { ButtonEl, LinkEl } from "./button.styled";

export const Button = ({ to, className = "", ...props }) => {
  if (to) {
    return <LinkEl to={to} className={className + " button"} {...props} />;
  }
  return <ButtonEl {...props} />;
};
