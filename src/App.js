import {useState, useEffect} from 'react'
import { Route, Switch} from 'react-router-dom'
import Header from "./components/Header"
import OperationOptions from "./components/OperationOptions"
import OperationsList from "./components/OperationsList"
import EditOperation from "./components/EditOperetion"
import CreateIncome from "./components/CreateIncome"
import CreateExpense from "./components/CreateExpense"

function App() {
  


  return (
    <div className="container">
    <Header />
    <OperationOptions/>
    <Switch>
      <Route exact path="/operations" component={OperationsList}/>
      <Route path="/operations/edit/:id" component={EditOperation}/>
      <Route path="/operations/createIncome" component={CreateIncome}/>
      <Route path="/operations/createExpense" component={CreateExpense}/>
    </Switch>
    </div>
  );
}

export default App;
