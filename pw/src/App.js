
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResponsiveDrawer from "./Component/Nav";
import Home from "./Component/Home"
import Contact from "./Component/Contact"
import Project from "./Component/Project"
import About from "./Component/About"
let React = require('react');





class App extends React.Component{
    render(){
        return(
            <BrowserRouter>

                <Switch>
                    <Route exact path='/' component={Home}>
                    </Route>
                    <Route path='/Project' component={Project}>
                    </Route>
                    <Route path='/Contact' component={Contact}>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;