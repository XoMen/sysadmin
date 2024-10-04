import { useLocation } from "react-router-dom";
import Breadcrumb from "../Base/Breadcrumb";
import { useAppSelector } from "@/stores/hooks";
import { selectSideMenu } from "@/stores/sideMenuSlice";

const BreadcrumbsMenu = () => {
  const path = useLocation()?.pathname;
  const sideMenuStore = useAppSelector(selectSideMenu);
  return (
    <Breadcrumb className="flex-1 hidden xl:block">
      <Breadcrumb.Link to="/">سایت</Breadcrumb.Link>
      <Breadcrumb.Link to="/">داشبورد</Breadcrumb.Link>
      <Breadcrumb.Link to={path} active={true}>
        {
          sideMenuStore
            ?.filter((item) => typeof item === "object")
            .find(({ pathname }) => pathname === path)?.title
        }
      </Breadcrumb.Link>
    </Breadcrumb>
  );
};

export default BreadcrumbsMenu;
