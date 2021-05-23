import Index from "./pages/platform/index"
import UserAdd from "./pages/component/User/UserAdd"
import UserList from "./pages/component/User/UserList"

const routes = [
  {
    path: "/index",
    authName: "DASHBOARD",
    component: Index,
    exact: true,
  },
  {
    path: "/user",
    authName: "AGENT",
    component: UserList,
  },
  {
    authName: "MY CRUISE",
    path: "/userAdd",
    component: UserAdd,
  },
  {
    authName: "HELP",
    path: "/userAdd",
    component: UserAdd,
  },
]
export default routes