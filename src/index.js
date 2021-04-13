import ReactDOM from 'react-dom';
import App from './components/App';

// CSS files
import './styles/global.css';
import './styles/utilities.css';
import './styles/components/navbar.css';
import './styles/components/home.css';
import './styles/components/sendFiles.css';
import './styles/components/sendFilesSuccess.css';
import './styles/components/recieveFiles.css';
import './styles/components/recieveFilesSuccess.css';
import './styles/components/about.css';

ReactDOM.render(<App />, document.getElementById('root'));
