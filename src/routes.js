// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
// import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import "../src/App.css"

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Homepage",
    // rtlName: "Hindi",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "----  1 ----",
    // rtlName: "Hindi",
    // icon: <StatsIcon color="inherit" />,
    icon: <HomeIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "----  2 ----",
    // rtlName: "Hindi",
    // icon: <CreditIcon color="inherit" />,
    icon: <HomeIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    // name: "RTL",
    name: "----  3 ----",
    // rtlName: "Hindi",
    // icon: <SupportIcon color="inherit" />,
    icon: <HomeIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  },

];
export default dashRoutes;
