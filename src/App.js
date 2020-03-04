import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Filter from './Components/filter'
import RestoAvail from './Components/resto'
import axios from 'axios'





class App extends Component
{
        constructor(props)
        {
          super()
          this.state={
            rest_list:[]
          }
        }
        
        fetchApi(){
          axios.get("http://localhost:8000/resto_list")
          .then(res=>{
            const rest=res.data
            this.setState({rest_list:rest})
         
            
            
           
        });
      }
        componentDidMount(){
          this.fetchApi()
        }
       
              
  render(){
     return (

    <div className="App">
   
      <Navbar>

      </Navbar>
      
      <RestoAvail list={this.state.rest_list}>

      </RestoAvail>
    
   

      
    </div>
  );
  }
  
}

export default App;
