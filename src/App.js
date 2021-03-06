
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Header/Home/Home';
import Login from './Components/Header/Login/Login';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>

        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/login' element = {<Login></Login>}></Route>      
     </Routes>

    </div>
  );
}

export default App;
