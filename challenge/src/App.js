import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Select from './components/Select';
import Configure from './components/Configure';
import Preview from './components/Preview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route 
            exact path='/'
            element= {<Select/>}
            />
      <Route 
            exact path='/configure'
            element= {<Configure/>}
            />
      <Route 
            exact path='/preview'
            element= {<Preview/>}
            />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
