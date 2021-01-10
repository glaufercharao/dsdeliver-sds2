import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";

const Routes = () =>{
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
            <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Orders">
                    <Orders />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes