import React from 'react';
import page_layout from './styles/filter_layout.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Filter = () => {
    return (
        <Router>
            <div className="row" style={{
                textAlign: "left",
                borderBottom: "1.5px solid blue"
            }}>
                <div className="col-sm-12">

                    <h4><strong>Filters</strong></h4></div>
                <hr />
                <div className="filter_options">
                    <hr />
                    <div style={{ borderTop: "1.3px solid blue" }}>
                        <div className="div_box">
                            <p><strong>Sort By</strong></p>
                            <ul>
                                <li><Link>Popularity</Link><small>high to low</small></li>
                                <li><Link>Rating</Link><small>high to low</small></li>
                                <li><Link>Cost</Link> <small>high to low</small></li>
                                <li><Link>Cost</Link><small>low to high</small></li>
                                <li><Link>Recently Added</Link><small>new to old</small></li>
                            </ul>
                        </div>

                    </div>
                    <div className="div_box" style={{ borderTop: "1.3px solid blue" }}>
                        <div>
                            <p><strong>Category</strong></p>
                            <ul>
                                <li><Link>Dine-Out</Link></li>
                                <li><Link>
                                    Delivery</Link>
                                </li>
                                <li>
                                    <Link>Cafes</Link>

                                </li>
                                <li><Link>Drinks and Nightlife</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="div-box" style={{ borderTop: "1.3px solid blue" }}>
                        <div>
                            <p><strong>Cuisine</strong></p>
                            <ul><li><Link>NorthIndian</Link></li>
                                <li><Link>SouthIndian</Link></li>
                                <li><Link>Chinese</Link></li>
                                <li><Link>Fast Food</Link></li>
                                <li><Link>Beverages</Link></li>
                                <li><Link>Desserts</Link></li>
                            </ul>
                        </div>
                    </div>




                </div>
            </div>

        </Router>

        
    )
}
export default Filter