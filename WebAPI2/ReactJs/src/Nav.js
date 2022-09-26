import React from 'react'
import './App.css';
import Home from './Home';
import Department from './cruds/Department';
import Employee from './cruds/Employee';
import Room from './cruds/Room';
import HouseKeeping from './cruds/HouseKeeping';
import Paymentss from './cruds/Paymentss';
import Tickets from './cruds/Tickets';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Col';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/home">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/department">
                        Department
                    </NavLink>
                </li>
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                        Employee
                    </NavLink>
                </li>
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/room">
                       Room
                    </NavLink>
                </li>
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/housekeeping">
                        HouseKeeping
                    </NavLink>
                </li>
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/payments">
                       Payments
                    </NavLink>
                </li>
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-light btn-outline-primary" to="/tickets">
                       Tickets
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
