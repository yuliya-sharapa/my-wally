import {useState} from 'react'
import { Route, Switch} from 'react-router-dom'
import Header from "./components/Header"
import OperationsList from "./components/OperationsList"
import EditOperation from "./components/EditOperetion"
import CreateIncome from "./components/CreateIncome"
import CreateExpense from "./components/CreateExpense"

function App() {
  const [operations, setOperations] = useState([]);
  const [balance, setBalance] = useState(0);

  return (
    <div className="container">
    <Header balance={balance} setBalance={setBalance} operations={operations} />
    <Switch>
      <Route exact path="/operations">
        <OperationsList operations={operations} setOperations={setOperations} />
      </Route>
      <Route path="/operations/edit/:id" component={EditOperation}/>
      <Route path="/operations/createIncome" component={CreateIncome}/>
      <Route path="/operations/createExpense" component={CreateExpense}/>
    </Switch>
    </div>
  );
}

export default App;
