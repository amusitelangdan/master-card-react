import React from 'react';
import { HashRouter } from 'react-router-dom'
import Navigation from './router/navgation';
import config from './router/router';
import { renderRoutes } from 'react-router-config'
import './App.less';

class App extends React.PureComponent {
  render() {
    console.log(renderRoutes(config))
    console.log(config)
    return (
      <HashRouter >
        {/* <Navigation routes={config} /> */}
        {renderRoutes(config)}
      </HashRouter>
    )
  }
}

export default App;
