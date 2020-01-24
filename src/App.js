import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import PantallaA from './components/PantallaA'
import Form1 from './components/Form1'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/pantallaA" component={PantallaA} />
                        <Route path="/form1" component={Form1} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
