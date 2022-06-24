
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RecurringPayments from './components/RecurringPayments';
import OneTimePayments from './components/OneTimePayments';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route 
            exact path='/recurringpayments'
            element= {<RecurringPayments/>}
            />
    <Route 
            exact path='/onetimepayments'
            element= {<OneTimePayments/>}
            />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
