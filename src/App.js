//import logo from './logo.svg';
import './App.css';
import Modalshow from './Component/Modalshow'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const App=()=> {

  const Pass=()=>{
   setShow('show')
  }
  const [show, setShow]= useState('')

  return (
    <div className="App">
    {  show ? <Modalshow/> : <Button
    onClick={Pass}
    style={{Background:'blue',
    marginTop:'400px'}}>
      save segment
    </Button>
    
    }
 
    </div>
  );
}

export default App;
