import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Filter from './Components/filter'
import RestoAvail from './Components/resto'

function fetch_API(){
  fetch("http://localhost:8080/resto_list")
  .then((res)=>console.log(res))
}
function App() {
  
  
  
  

  



  return (

    <div className="App">
      <Navbar>

      </Navbar>
      <RestoAvail>

      </RestoAvail>
    
    
    </div>
  );
}

export default App;
