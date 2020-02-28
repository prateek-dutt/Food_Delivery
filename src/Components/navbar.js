import React from 'react';

const Navbar=()=>{

    return(
        <div>
      <nav className="navbar navbar-dark bg-dark" style={{border:"2px solid black"}}>
          <a href="#" className="navbar-brand">City Food App</a>    
          <li><a href="#">Log-In</a></li>
          <li><a href="#">Contact</a></li>
        
      </nav>
        </div>

    )
}

export default Navbar