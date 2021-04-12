import { useState } from 'react';

const RecieveFiles = ({ recieverCode, setRecieverCode, setRecieverFiles}) => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div id="recieve-files-page">
            <div className="container">
                <h1>Enter your code</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="code" id="code-input" value={recieverCode} onChange={e => setRecieverCode(e.target.value)} />
                    <button type="submit" className="btn">Enter</button>
                </form>
            </div>
        </div>
    );
}

export default RecieveFiles;