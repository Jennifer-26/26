import { useSelector } from 'react-redux';
import './App.css';
import Login from "./components/Login";
import LogoutIcon from './components/Logout';
import { selectUser } from './features/userSlice';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Products from "./components/Products";
import Data from "./components/Data";


function App() {

  const user = useSelector(selectUser);

 

  return (
    <div className="App">
      
      {user ? <div><Navbar/><LogoutIcon/><Home/><Data/><Products/></div> : <Login/> }
      
    </div>
  );
}

export default App;
