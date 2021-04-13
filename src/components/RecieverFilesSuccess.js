import { useState, useEffect } from 'react';
import { storage } from '../firebase/config';
import CloseSession from './CloseSession';

const RecieveFilesSuccess = ({ recieverCode }) => {
    const [fileNames, setFileNames] = useState([]);

    useEffect(() => {
        const storageRef = storage.ref().child('userFiles/' + recieverCode);
        storageRef.listAll().then(dir =>
            dir.items.forEach(item => {
                const itemRef = storage.ref().child(item.fullPath);
                itemRef.getDownloadURL().then(url => {
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = () => {
                        var blob = xhr.response;
                        setFileNames(arr => [
                            ...arr,
                            { name: item.name, url: url, blob: blob },
                        ]);
                    };
                    xhr.open('GET', url);
                    xhr.send();
                });
            })
        );
    }, []);

    const renderFilesList = () => {
        return fileNames.map(file => {
            return (
                <div key={file.name} className='field'>
                    <p>{file.name}</p>
                    <a
                        href={URL.createObjectURL(file.blob)}
                        download={file.name}
                        className='btn btn-secondary'
                    >
                        Download
                    </a>
                </div>
            );
        });
    };

    return (
        <div id='reciever-file-success'>
            <div className='container'>
                <h2 className='heading'>Your files</h2>
                {renderFilesList()}
                <CloseSession code={recieverCode} />
            </div>
        </div>
    );
};

export default RecieveFilesSuccess;
