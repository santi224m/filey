import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const [showNav, updateShowNav] = useState(false);

    return (
        <>
        <div id='navbar' className={`${showNav ? 'position-fixed' : ''}`}>
            <div className='container'>
                <Link to='/' className='navbar-logo' onClick={() => updateShowNav(false)}>
                    Filey
                </Link>
                <div className='navbar-links'>
                    <Link to='/' className='navbar-item'>
                        Home
                    </Link>
                    <Link to='/about' className='navbar-item'>
                        About
                    </Link>
                    <a
                        href='https://github.com/santi224m/filey'
                        className='navbar-item'
                    >
                        Contribute
                    </a>
                </div>
                <div
                    id='mobile-menu'
                    className={showNav ? 'change' : ''}
                    onClick={() => updateShowNav(!showNav)}
                >
                    <div className={`bar1`}></div>
                    <div className={`bar2`}></div>
                    <div className={`bar3`}></div>
                </div>
            </div>
        </div>
        {showNav &&
            <MobileNavbar updateShowNav={updateShowNav} />
        }
        </>
    );
};

export default Navbar;
