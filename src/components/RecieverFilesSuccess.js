import { useState, useEffect } from 'react';
import { storage } from '../firebase/config';

const RecieveFilesSuccess = ({ recieverCode }) => {
    const [fileNames, setFileNames] = useState([]);

    useEffect(() => {
        const storageRef = storage.ref().child('userFiles/' + recieverCode);
        storageRef.listAll().then(dir =>
            dir.items.forEach(item => {
                // console.log(item.name)
                const itemRef = storage.ref().child(item.fullPath);
                itemRef.getDownloadURL().then(url => {
                    setFileNames(arr => [ ...arr, { name: item.name, url: url }]);
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                      var blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();
                    console.log('sent!')
                });
            })
        );
    }, []);

    useEffect(() => {
        console.log(fileNames)
    }, [fileNames])

    const renderFilesList = () => {
        return fileNames.map(file => {
            return (
                <div key={file.name} className="field">
                    <p>{file.name}</p>
                    <a href={file.url} download={`blob:` + file.name} className="btn">Download</a>
                </div>
            );
        })
    }

    return (
        <div id='reciever-file-success'>
            <div className='container'>
                <h2>Your files:</h2>
                {renderFilesList()}
            </div>
        </div>
    );
};

export default RecieveFilesSuccess;
