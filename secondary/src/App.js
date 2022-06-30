
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RecurringPayments from './components/RecurringPayments';
import OneTimePayments from './components/OneTimePayments';
import ConfigureCheckout from './components/ConfigureCheckout';
import Preview from './components/Preview';

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
        <Route 
                path='/configurecheckout'
                element= {<ConfigureCheckout/>}
                />
        <Route 
                path='/preview'
                element= {<Preview/>}
                />
             
    </Routes>

    </BrowserRouter>
  );
}

export default App;
