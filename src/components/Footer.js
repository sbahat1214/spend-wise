import React from 'react'
import {FaHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div style={{background:'#1C2B4C', color:'#919eb7'}}>
            <div className="">
                <div className="display-4">Spend Wise</div>
                <div> Made with<span style={{color:'red'}}> <FaHeart /> </span>by RSA</div>
                <div>© 2019 RSA</div>
                <div>
                    <a className="mx-md-4 mx-2" href="mailto:bcs.f15.43@gmail.com">Contact</a>
                    <a className="mx-md-4 mx-2" href="/">Help</a>
                    <Link className="mx-md-4 mx-2" to="/tos">TOS</Link>
                    <Link className="mx-md-4 mx-2" to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
