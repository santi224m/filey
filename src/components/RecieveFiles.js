import { useState } from 'react';
import { storage } from '../firebase/config';
import history from '../history';

const RecieveFiles = ({
    recieverCode,
    setRecieverCode,
}) => {
    const handleSubmit = e => {
        // const recieverFiles = [];
        // const urls = [];
        // e.preventDefault();
        // const storageRef = storage.ref().child('userFiles/' + recieverCode);
        // storageRef.listAll().then(dir =>
        //     dir.items.forEach(item => {
        //         recieverFiles.push(item.name);
        //         const itemRef = storage.ref().child(item.fullPath);
        //         itemRef.getDownloadURL().then(url => {
        //             // console.log(url);
        //             urls.push(url);
        //         });
        //     })
        // );

        // setRecieverFiles(recieverFiles);
        // setDownloadURLs(urls);

        e.preventDefault();

        history.push('recieve-files-success');
    };

    return (
        <div id='recieve-files-page'>
            <div className='container'>
                <h1>Enter your code</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='code'
                        id='code-input'
                        value={recieverCode}
                        onChange={e => setRecieverCode(e.target.value)}
                    />
                    <button type='submit' className='btn'>
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RecieveFiles;
