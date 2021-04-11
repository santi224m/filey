import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="home-page">
            <div className="container">
                <h1>A Quick Way to Transfer Files</h1>
                <p>Do you ever have to transfer files from your phone to your desktop or vice versa?
                    This app offer a quick solution to that problem. Upload your files on one device and enter the
                    code on the other device. Once you download your files, they are deleted and you can go on with your day.
                </p>
                <div className="wrap-buttons">
                    <Link to="/send-files" className="btn">Send Files</Link>
                    <Link to="/recieve-files" className="btn">Recieve Files</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;