import React from 'react'
import { Link } from 'react-router'

const naviBar = props => (
         <div>
            <nav className="navbar navbar-inverse" style={{borderRadius:'0'}}>
                <div className="container-fluid">
                    {/* Brand and toggle get grouped for better mobile display  */}
                    <div className="navbar-header">
                        <button type="button" className="pull-left navbar-toggle collapsed" 
                                data-toggle="collapse" 
                                data-target="#menuBar" 
                                aria-expanded="false" >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link  to='/home' className="navbar-brand">Car Catalog</Link>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling  */}
                    <div className="collapse navbar-collapse" id="menuBar">
                        <ul className="nav navbar-nav">
                            <li>
                              <Link to='/home'  activeClassName='activeMenuItem'>Home</Link>
                            </li>
                            <li>
                             <Link to='/search' activeClassName='activeMenuItem'>Search</Link>
                             </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </div>
    )

export default naviBar
