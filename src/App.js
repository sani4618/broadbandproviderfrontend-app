import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Addcustomer from './components/Addcustomer';
import Search from './components/Search';
import Delete from './components/Delete';
import Login from './components/Login';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Addcus" exact element={<Addcustomer/>}/>
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/delete" exact element={<Delete/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/view" exact element={<Viewall/>}/>
      </Routes>
             
      </BrowserRouter>

    </div>
  );
}

export default App;
