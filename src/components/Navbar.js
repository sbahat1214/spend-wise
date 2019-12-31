import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light  px-auto">
            <Link className="navbar-brand" to="/">Spend Wise</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Features</Link>
                </li>
                <li className="nav-item" a="#pricing">
                    <Link className="nav-link" to="/">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">FAQs</Link>
                </li>
                <button className="btn btn-default mr-lg-2 mb-2 mb-lg-0 purple-gradient rounded-0 gradient" >SIGN UP</button>
                <button className="btn btn-primary  rounded-0" >LOG IN</button>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
