import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo">Filey</Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/about" className="navbar-item">About</Link>
                    <Link to="/contribute" className="navbar-item">Contribute</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;