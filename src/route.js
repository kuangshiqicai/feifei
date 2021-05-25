import Index from "./pages/platform/index"
import UserAdd from "./pages/component/User/UserAdd"
import UserList from "./pages/component/User/UserList"
import HELP from "./pages/component/User/HELP"
import Agent from "./pages/component/User/Agent"

const routes = [
  {
    path: "/index",
    authName: "DASHBOARD",
    icon: "icon-dashboard",
    component: Index,
    exact: true,
  },
  {
    path: "/user",
    authName: "AGENT",
    icon: "icon-sitemap",
    component: UserList,
  },{
    authName: "Agent",
    path: "/agent",
    icon: "icon-sitemap",
    component: Agent,
  },
  {
    authName: "MY CRUISE",
    path: "/userAdd",
    icon: "icon-boat",
    component: UserAdd,
  },
  {
    authName: "HELP",
    path: "/test",
    icon: "icon-life-bouy",
    component: HELP,
  },
]
export default routes