import { useState } from 'react';
import { Link } from 'react-router-dom';
import generator from 'generate-password';
import { storage } from '../firebase/config';

const SendFiles = ({ setCode }) => {
    const [files, setFiles] = useState([]);

    const changeHandler = e => {
        let selected = e.target.files;
        // console.log(selected);
        setFiles(Object.values(selected));
    };

    const renderFilesList = () => {
        return files.map(file => {
            return <li key={file.name}>{file.name}</li>;
        });
    };

    const handleNextBtn = () => {
        const newCode = generator.generate({
            length: 6,
            numbers: true,
        });
        setCode(newCode);
        const storageRef = storage.ref();
        const filesRef = storageRef.child('userFiles/' + newCode);
        files.forEach(file => {
            const userRef = filesRef.child(file.name);
            userRef.put(file);
        });
    };

    const renderNextBtn = () => {
        return (
            <Link
                to='/upload-files-success'
                className='btn btn-secondary'
                id='next-page-btn'
                onClick={handleNextBtn}
            >
                Send
            </Link>
        );
    };

    return (
        <div id='send-files-page'>
            <div className='container'>
                <h1 className='heading'>Upload your files</h1>
                <form>
                    <label htmlFor='files' id='upload-btn' className='btn'>
                        Click to Upload Files
                    </label>
                    <p>Or</p>
                    <label htmlFor='files' id='files-label'>
                        Drag and drop files here
                        <input
                            type='file'
                            name='files'
                            id='files'
                            multiple='multiple'
                            onChange={changeHandler}
                        />
                    </label>
                </form>
                <div className='files-list'>
                    <ul>
                        {renderFilesList()}
                        {files.length !== 0 && renderNextBtn()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SendFiles;
