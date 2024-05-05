import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {


    const [menutoggle, setMenutoggle] = useState(false)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }
    const handleInputChange = (e) => {
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that runs
            const q = e.target.value;
            window.location.href = "http://127.0.0.1:3000/search/"+q;
            
        }
    };

    return (
        <div className="header">
            <div className="logo-nav">
            <Link to='/'>
                <a href="#home">LIBRARY</a>
            </Link>
            </div>
            <div className='nav-right'>
                <input onKeyUp={handleInputChange} className='search-input' type='text' placeholder='Search a Book'/>
                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/'>
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>
                        <a href="#books">Books</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signin'>
                        <a href='signin'>SignIn</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
    )
}

export default Header
