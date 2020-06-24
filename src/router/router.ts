import { RouteProps } from "react-router-dom";
import Home  from "./../views/Home/Home";
import Login from "./../views/Login/Login";
import Store from './../views/Store/Store'

const config = [
    {
        path: "/login",
        component: Login,
        exact: true,
    },
    {
        path: "/home",
        component: Home,
        children: [
            {
                path: "/home/store",
                component: Store,
                exact: true,
            },
            {
                path: "/home/store1",
                component: Store,
                exact: true,
            },
            {
                path: "/home/store2",
                component: Store,
                exact: true,
            }
        ]
    }
]
  

export default config