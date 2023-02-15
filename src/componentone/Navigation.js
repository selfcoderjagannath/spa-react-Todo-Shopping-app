import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaTwitter, FaGithubSquare,FaSearch } from 'react-icons/fa';
import navbar from '../images/navbar.jpg'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={navbar} className='w-5 rounded-circle h-20' alt="..." />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">TodoList</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/Shoping">Shoping</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/all">Course</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink></li>
                            {/* <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/multipleinput">Multipleinput</NavLink></li> */}
                        </ul>
                        <button className='btn text-light mx-2'><FaTwitter /></button>
                        <button className='btn text-light'><FaGithubSquare /></button>
                        <form className="d-flex" role="search">
                            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary text-danger" type="submit"><FaSearch /></button>
                        </form>                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;



