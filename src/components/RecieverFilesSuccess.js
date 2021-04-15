import { useState, useEffect } from 'react';
import { storage } from '../firebase/config';
import CloseSession from './CloseSession';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const RecieveFilesSuccess = ({ recieverCode }) => {
    const [fileNames, setFileNames] = useState([]);
    const [codeErr, setCodeErr] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref().child('userFiles/' + recieverCode);
        storageRef.listAll().then(dir => {
            if (dir.items.length === 0) {
                setCodeErr(
                    'No files were found with your code. Please make sure that you entered it correctly'
                );
            }
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
            });
        });
    }, [recieverCode]);

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
            <Helmet>
                <title>Filey | Recieve Files</title>
            </Helmet>
            <div className='container'>
                <h2 className='heading'>Your files</h2>
                {codeErr && <div className='error-message'>{codeErr}</div>}
                {renderFilesList()}
                {!codeErr && <CloseSession code={recieverCode} />}
                {codeErr && (
                    <Link
                        to='/recieve-files'
                        className='btn btn-long close-session'
                    >
                        Go back
                    </Link>
                )}
            </div>
        </div>
    );
};

export default RecieveFilesSuccess;
