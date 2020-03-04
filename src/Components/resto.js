import React,{Component} from 'react';
import Filter from './filter'

var restaraunts = {restaraunts:[{name:"Eat-Street",rating:"******",delivery_rating:"******",dine_cost:"200"},{name:"Ganesh",rating:"******",delivery_rating:"******",dine_cost:"200"

  },{name:"Eat-Street",rating:"******",delivery_rating:"******",dine_cost:"200"},{name:"Eat-Street",rating:"******",delivery_rating:"******",dine_cost:"200"}]}
  var resto=[]
  var len = restaraunts.restaraunts.length
  var i=0
  while (i<len)
  {
    resto[i]=restaraunts.restaraunts[i]
    i+=1
  }
  
class Resto extends Component

{
    constructor(props){
        super(props)
        this.state={
            list: props.list
        }
       
    }
    
 
 
 
    



            
    
    
    render(){
                return(
                    <div className="row" >
                    
        <div className="col  m3">
        <Filter></Filter>
        </div>


      <div className="col s6 m6">
        {this.state.list.map(function(resto,index){
          
          return(

            
            <a href="#">
             <div className="row">
            <div className="card" >
           
              <div className="card-content-title">{resto.name}</div>
         
            <div className="card-content">
            <strong>Rating</strong>
             <p>{resto.delivery_rating}</p>
             <strong>Dining Cost</strong>
              <p>{resto.dine_cost}</p>
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
     
            
                )}
    

}

export default Resto