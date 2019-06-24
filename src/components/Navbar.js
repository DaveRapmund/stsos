import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <div className="navbar-row row">
      <nav className="navbar navbar-dark navbar-expand-sm col-12">
        <button className="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#toggleMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleMenu">
          <div className="navbar-nav text-center mt-2">
            <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/">Home</Link>
            <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/cefalu">Cefalù</Link>
            <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/taormina">Taormina</Link>
            <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/palermo">Palermò</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
