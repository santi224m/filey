import { Link } from 'react-router-dom';

const MobileNavbar = ({ updateShowNav }) => {
    const handleClick = () => {
        updateShowNav(false);
    };

    return (
        <div id='mobile-navbar'>
                    <Link to='/' className='navbar-item' onClick={handleClick}>
                        Home
                    </Link>
                    <Link to='/send-files' className='navbar-item' onClick={handleClick}>
                        Send Files
                    </Link>
                    <Link to='/recieve-files' className='navbar-item' onClick={handleClick}>
                        Recieve Files
                    </Link>
                    <Link to='/about' className='navbar-item' onClick={handleClick}>
                        About
                    </Link>
                    <a
                        href='https://github.com/santi224m/filey'
                        className='navbar-item'
                    >
                        Contribute
                    </a>
        </div>
    );
};

export default MobileNavbar;