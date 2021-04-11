import { BrowserRouter, Switch, Route } from   'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SendFiles from './SendFiles';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/send-files" component={SendFiles} />
                <Route path="/" exact component={Home} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default App;