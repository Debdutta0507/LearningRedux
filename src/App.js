import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import {useSelector,useDispatch} from 'react-redux';


function App() {
  const myState = useSelector((state) => state.amountReducer)

  return (
    <>
  
    <div className="App">
      <Navbar /> 
    
      <div className="container">
 
        <Shop />
      </div>
  

    </div>
    </>
    
  );
}

export default App;
