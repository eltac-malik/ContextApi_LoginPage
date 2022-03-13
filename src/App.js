import './App.css';
import LogIn from './components/LogIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import { Eltac } from './context/Vuqar';
import { Prov } from './context/Context';




function App() {

  return (
    <div className="App">

    <Prov>
      
        
        <Router>
            <Link to='/'></Link>
  
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path='/login' element = {<LogIn/>}></Route>
            <Route path='/home' element = {<Home/>}></Route>
          </Routes>
        </Router>
  
  
    </Prov>

    </div>
  );
}

export default App;
