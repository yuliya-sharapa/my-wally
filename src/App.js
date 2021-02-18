import {useState} from 'react'
import Header from "./components/Header"
import IncomeExpenseForm from "./components/IncomeExpenseForm"
import OperationsList from "./components/OperationsList"

function App() {
  const [operation, setOperation] = useState([]);
	const [balance, setBalance] = useState(0);

  return (
    <div className="App container">
      <Header />
      <IncomeExpenseForm />
      <OperationsList />
    </div>
  );
}

export default App;
