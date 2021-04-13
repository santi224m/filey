import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='navbar'>
            <div className='container'>
                <Link to='/' className='navbar-logo'>
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
            </div>
        </div>
    );
};

export default Navbar;
