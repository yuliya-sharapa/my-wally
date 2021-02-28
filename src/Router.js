import React, { useContext } from 'react';
import { Route, Switch} from 'react-router-dom'
import Header from "./components/Header"
import OperationsList from "./components/OperationsList"
import EditOperation from "./components/EditOperetion"
import CreateIncome from "./components/CreateIncome"
import CreateExpense from "./components/CreateExpense"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import AuthContext from "./context/AuthContext";

function Router() {
    const {loggedIn} = useContext(AuthContext);
    return (
        <div className="container">
            <Header  />
            <Switch>
            <Route exact path="/" component={Home} />
            {loggedIn === false && (
            <>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </>
            )}
            {loggedIn === true && (
            <>
                <Route exact path="/operations">
                    <OperationsList  />
                </Route>
                <Route path="/operations/edit/:id" component={EditOperation}/>
                <Route path="/operations/createIncome" component={CreateIncome}/>
                <Route path="/operations/createExpense" component={CreateExpense}/>
            </>
            )}
            </Switch>
        </div>
    )
}

export default Router
