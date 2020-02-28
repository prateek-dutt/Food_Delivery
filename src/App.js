import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Filter from './Components/filter'
function App() {
  var names=["EatStreet","Ganesh","Maruti Dhoom Machale","Silver Spoone","99North","Dominos","Chacha Ka Dukan"];
  return (

    <div className="App">
      <Navbar>

      </Navbar>
    
      <div className="row">
        <div className="col  m6">
        <Filter></Filter>
        </div>


      <div className="col s6 m6">
        {names.map(function(name,index){
          return(
            <a href="">
             <div className="row">
            <div className="card">
           
              <div className="card-content-title">{name}</div>
         
            <div className="card-content">
              <p>
                yummy food is an order away!
              </p>
            </div>
            </div>
            </div>
            </a>
          )
        })}
       
        </div>
        
      </div>
     
    </div>
  );
}

export default App;
