import { useState } from 'react';
import { BrowserRouter, Switch, Route } from   'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SendFiles from './SendFiles';
import SendFilesSuccess from './SendFilesSuccess';
import RecieveFiles from './RecieveFiles';

const App = () => {
    const [senderCode, setSenderCode] = useState(null);
    const [recieverCode, setRecieverCode] = useState(null);
    const [recieverFiles, setRecieverFiles] = useState(null);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/send-files">
                    <SendFiles setCode={setSenderCode} />
                </Route>
                <Route path="/upload-files-success">
                    <SendFilesSuccess code={senderCode} />
                </Route>
                <Route path='/recieve-files'>
                    <RecieveFiles recieverCode={recieverCode} setRecieverCode={setRecieverCode} setRecieverFiles={setRecieverFiles} />
                </Route>
                <Route path="/" exact component={Home} /> 
            </Switch>
        </BrowserRouter>
    );
}

export default App;