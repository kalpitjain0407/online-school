// import TeacherDash from "views/TeacherDash.jsx";
import TeacherDash from "./views/TeacherDash.jsx"
import TeacherProfile from "./views/TeacherProfile.jsx";
// import TeacherProfile from "views/TeacherDash"
import StudentsList from "views/StudentsList.jsx";
import Typography from "views/Typography.jsx";
// import Icons from "views/Icons.jsx";
// import Maps from "views/Maps.jsx";
// import Notifications from "views/Notifications.jsx";
// import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: TeacherDash,
    layout: "/teacher"
  },
  {
    path: "/user",
    name: "Hello Teacher",
    icon: "pe-7s-user",
    component: TeacherProfile,
    layout: "/teacher"
  },
  {
    path: "/table",
    name: "Students",
    icon: "pe-7s-users",
    component: StudentsList,
    layout: "/teacher"
  },
  {
    path: "/typography",
    name: "Schedule",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/teacher"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
