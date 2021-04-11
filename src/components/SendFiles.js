import { useState } from 'react';
import { Link } from 'react-router-dom';
import generator from 'generate-password';

const SendFiles = ({ setCode }) => {
    const [files, setFiles] = useState([]);

    const changeHandler = e => {
        let selected = e.target.files;
        // console.log(selected);
        setFiles(Object.values(selected));
    }

    const renderFilesList = () => {
        return files.map(file => {
            return (
                <li key={file.name}>{file.name}</li>
            );
        })
    }

    const handleNextBtn = () => {
        const newCode = generator.generate({
            length: 6,
            numbers: true
        })
        setCode(newCode);
    }

    const renderNextBtn = () => {
        return <Link to="/upload-files-success" className="btn" id="next-page-btn" onClick={handleNextBtn}>Send</Link>
    }

    return (
        <div id="send-files-page">
            <div className="container">
                <h1>Upload your files</h1>
                <form>
                    <label htmlFor="files" id="upload-btn" className="btn">Add Files</label>
                    <label htmlFor="files" id="files-label">
                        Drag and drop files
                        <input type="file" name="files" id="files" multiple="multiple" onChange={changeHandler}/>
                    </label>
                </form>
                <div className="files-list">
                    <ul>
                        {renderFilesList()}
                    </ul>
                </div>
                {files.length !== 0 && renderNextBtn()}
            </div>
        </div>
    );
}

export default SendFiles;