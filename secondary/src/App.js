import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RecurringPayments from './components/RecurringPayments';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route 
            exact path='/recurringpayments'
            element= {<RecurringPayments/>}
            />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
