import React,{Component} from 'react';
import Filter from './filter'
import Order from './order'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Resto extends Component

{
  
    constructor(props){
        super(props)
        console.log(props.list)
        this.state={
            list:[],
            status:true
        }


       
       
      }
    
      getInitialState(){
        this.setState({
          status: false
        })
      }
      
      get_ready_for_status(){
        this.setState({
          status: false
        })
      }
 
 
    



            
    
    
    render(){

      const style=this.state.status ? {display:'none'}:{};
                return(
                    <div className="row" >
                    
        <div className="col  m3">
        <Filter></Filter>
        </div>


      <div className="col s6 m6" >
        {this.props.list.map(function(resto,index){
          
          return(

            <div classNameLink="" >
            <Router>
            <Link to="/order">

            
             <div className="row">
            <div className="card" >
           
              <div className="card-content-title">{resto.name}</div>

                

            <div className="card-content">
            <strong>
             <p>{resto.address}</p></strong>
          
                  <p>

                    {resto.cuisine_type}
                  </p>
                
                
          
            </div>
            </div>
            </div>
            </Link>
            <Switch>
              <Route path="/order">
              <Order>

              </Order>
              </Route>
            </Switch>
            </Router>
            </div> )
        })}
      
        </div>
        
      </div>
     
            
                )
              }
    

}

export default Resto