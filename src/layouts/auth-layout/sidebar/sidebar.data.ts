import {
  BellIcon,
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
} from "@assets/icons";

export const SideBarData = [
  { id: 1, link: "/dashboard", name: "Dashboard", icon: DashboardIcon },
  { id: 4, link: "/campaigns", name: "Campaigns", icon: DashboardIcon },
  {
    id: 2,
    link: "/brand-collaboration",
    name: "Brand Collaboration",
    icon: BellIcon,
  },
  { id: 5, link: "#", name: "Notifications", icon: BellIcon },
  { id: 3, link: "#", name: "My Profile", icon: ProfileIcon },
  {
    id: 7,
    link: "/request-fulltime-creator",
    name: "Request",
    icon: DashboardIcon,
  },
  { id: 8, link: "/buy-clip", name: "Buy Clip", icon: DashboardIcon },
  { id: 8, link: "/page-submission", name: "Page Link", icon: DashboardIcon },
];
