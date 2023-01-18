import {
  ButtonFilterWr,
  HeaderImg,
  HeaderOption,
  HeaderSelect,
  HeaderTitleWr,
  HeaderWrapper,
  InvoicesNumber,
} from "./site-header.styled";
import invoice from "../../assets/images/invoices.svg";
import { Button } from "../button";

export const SiteHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderTitleWr>
          <HeaderImg src={invoice} alt="Invoices" />
          <h1 className="visually-hidden">Invoices</h1>
          <InvoicesNumber>There are 13 total invoices</InvoicesNumber>
        </HeaderTitleWr>

        <ButtonFilterWr>
          <HeaderSelect name="filter" className="site-header__select">
            <HeaderOption value="">
              All
            </HeaderOption>
            <HeaderOption value="false">
              Pending
            </HeaderOption>
            <HeaderOption value="true">
              Paid
            </HeaderOption>
          </HeaderSelect>
          <Button>New Invoice</Button>
        </ButtonFilterWr>
      </HeaderWrapper>
    </>
  );
};
