import React from 'react';
import { Route, Switch, SwitchProps, RouteProps, Redirect } from 'react-router';
import { withRouter, RouteComponentProps } from "react-router-dom";
import Home from '../views/Home/Home';
import Store from './../views/Store/Store'

// interface NavgationParams {
//     routes: RouteProps[];
//     switchProps?: SwitchProps;
// }

// function renderRoutes(params: NavgationParams) {
//     const { switchProps, routes } = params;

//     return (
//         <Switch {...switchProps}>
//             {
//                 routes.map((route, index) => {
//                     return (
//                         <Route
//                           key={index}
//                           path={route.path}
//                           component={route.component}
//                           exact={route.exact || true}
//                           strict={route.strict || false}
//                         ></Route>
//                     )
//                 })
//             }
//         </Switch>
//     )
// }

class Navigation extends React.PureComponent<any, any> {
    state = {
        selectedPath: []
    };

    componentDidMount() {
    }



    render() {
        const routes = this.props.routes;
        console.log(routes)
        return (
            <React.Fragment>
                {/* <Switch>
                    <Route path="/home" component={() => (
                        <Home>
                            <Route exact path="/home/store" component={Store} />
                            <Route exact path="/home/store1" component={Store} />
                            <Route exact path="/home/store2" component={Store} />
                        </Home>
                    )}>
                    </Route>
                </Switch> */}

                <Switch> 
                    { // 利用render 渲染子路由
                        routes.map((route:any, index:any) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: any) => { // 利用render 方法处理
                                    if (route.children) {
                                        return (
                                            <Home>
                                                <route.component props={props}></route.component>
                                                <Switch>
                                                    {
                                                        route.children.map((child: any , i: any) => (
                                                            <Route
                                                                key={i}
                                                                path={child.path}
                                                                exact={child.exact}
                                                                component={child.component}
                                                            />
                                                        ))
                                                    }
                                                    <Redirect to={route.children[0].path}></Redirect> // 子路由找不到，重定向到第一个子路由
                                                </Switch>
                                            </Home>
                                        )
                                    } else {
                                        return (
                                            <route.component props={props}></route.component>
                                        )
                                    }
                                }}
                            />
                        ))
                    }
                    {/* <Redirect from='/' to='/login'></Redirect> // 根路径重定向到 /Index */}
                </Switch>
            </React.Fragment>
        );
    }
}

// export default renderRoutes;
export default Navigation;