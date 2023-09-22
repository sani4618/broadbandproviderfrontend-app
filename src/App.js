import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Addcustomer from './components/Addcustomer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
        <Route path="/Addcus"exact element={<Addcustomer/>}/>
      </Routes>
             
      </BrowserRouter>

    </div>
  );
}

export default App;
