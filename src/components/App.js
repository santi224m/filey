import { useState } from 'react';
import { BrowserRouter, Switch, Route } from   'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SendFiles from './SendFiles';
import SendFilesSuccess from './SendFilesSuccess';

const App = () => {
    const [code, setCode] = useState(null);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/send-files">
                    <SendFiles setCode={setCode} />
                </Route>
                <Route path="/upload-files-success">
                    <SendFilesSuccess code={code} />
                </Route>
                <Route path="/" exact component={Home} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default App;