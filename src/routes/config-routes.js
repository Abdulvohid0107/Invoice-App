import { useRoutes } from "react-router-dom";
import { InvoicesPage } from "../pages";

const routes = [
  {
    path: "/",
    element: <InvoicesPage/>
  }
]

export const Routes = () => {
  const elements = useRoutes(routes)
  return elements
}