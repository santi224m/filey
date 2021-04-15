import { useState } from 'react';
import history from '../history';
import { Helmet } from 'react-helmet';

const RecieveFiles = ({ recieverCode, setRecieverCode }) => {
    const [codeErr, setCodeErr] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (recieverCode.length !== 6) {
            setCodeErr('*Please enter your 6 digit code');
            return;
        }

        history.push('recieve-files-success');
    };

    return (
        <div id='recieve-files-page'>
            <Helmet>
                <title>Filey | Recieve Files</title>
            </Helmet>
            <div className='container'>
                <h1 className='heading'>Enter your code</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='code'
                        id='code-input'
                        value={recieverCode}
                        onChange={e => setRecieverCode(e.target.value)}
                    />
                    {codeErr && <div className='error-message'>{codeErr}</div>}
                    <button type='submit' className='btn btn-long'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RecieveFiles;
