import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Select from './components/Select';
import Configure from './components/Configure';
import Preview from './components/Preview';
import { Options} from './components/Options';

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
            element= {<Options><Configure/> </Options>}
            />
      <Route 
            exact path='/preview'
            element= {<Options><Preview/> </Options>}
            />
      </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
