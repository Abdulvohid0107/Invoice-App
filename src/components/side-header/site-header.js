import {
  ButtonAdd,
  ButtonFilterWr,
  HeaderHeading,
  HeaderOption,
  HeaderSelect,
  HeaderTitleWr,
  HeaderWrapper,
  InvoicesNumber
} from "./site-header.styled";

export const SiteHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderTitleWr>
        <HeaderHeading>Invoices</HeaderHeading>
        <InvoicesNumber> <span>There are</span> 13 <span>total</span> invoices</InvoicesNumber>
      </HeaderTitleWr>

      <ButtonFilterWr>
        <HeaderSelect name="filter" className="site-header__select">
          <HeaderOption value="">All</HeaderOption>
          <HeaderOption value="false">Pending</HeaderOption>
          <HeaderOption value="true">Paid</HeaderOption>
        </HeaderSelect>
        <ButtonAdd>New <span>Invoice</span></ButtonAdd>
      </ButtonFilterWr>
    </HeaderWrapper>
  );
};
