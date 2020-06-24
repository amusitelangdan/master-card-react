import React from 'react';
import { HashRouter } from 'react-router-dom'
import config from './router/router';
import { renderRoutes } from 'react-router-config'
import './App.less';

class App extends React.PureComponent {
  render() {
    return (
      <HashRouter >
        {renderRoutes(config)}
      </HashRouter>
    )
  }
}

export default App;
