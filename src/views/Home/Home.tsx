import React from 'react';
import './Home.less';
import { renderRoutes } from 'react-router-config'


class Home extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        console.log(renderRoutes(this.props.route.routes));
        console.log(this.props.route.routes);
        return (
            <div>
                {renderRoutes(this.props.route.children)}
            </div>
        )
    }
}

export default Home;
