import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Filter from './Components/filter'
import RestoAvail from './Components/resto'
import axios from 'axios'
res=[]

function fetch_API(){
  axios.get('http://localhost:8000/resto_list')
  .then(res =>{
    const rest=res.data
    res=rest
  })
  
   
}
function App() {
  
  setInterval(fetch_API,1)
  
  console.log(resto)

  



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
