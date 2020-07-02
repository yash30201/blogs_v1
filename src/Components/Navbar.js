import React from 'react'
import {Link, NavLink,withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() =>{
    //     props.history.push('/About');
    // },2000);

    return(
        <nav className="nav-wrapper blue darken-5">
            <div className="container">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="brand-logo">Nova Posts</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Posts">Posts</NavLink></li>
                </ul>

            </div>
        </nav>
    )
}

export default withRouter(Navbar)
//Now...our Navbar is super charged