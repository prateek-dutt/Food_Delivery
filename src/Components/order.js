import React,{Component} from 'react';


class Order extends Component
{


    


    constructor(props)
    {
        super()
        this.state={
            name:'Sample Restraunt'
        }
    }

    componentDidMount(){
        var x=document.getElementsByClassName("row")
        x.style={

            display:
            "none"

        }
        
    }

    render(){
        const style=this.state.status ?  {display:'none'} : {};
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }


}
export default Order