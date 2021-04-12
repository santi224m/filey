import { useEffect } from 'react';

const RecieveFilesSuccess = ({ recieverFiles, downloadURLs }) => {
    useEffect(() => {
        console.log(downloadURLs);
        console.log(recieverFiles);
    }, [recieverFiles]);

    const renderFilesList = () => {
        return recieverFiles.map(file => {
            const fileUrl = downloadURLs.filter(url => url.includes(file));
            return (
                <li key='file'>
                    {file}
                    <a href={fileUrl} download className='btn'>
                        Download File
                    </a>
                </li>
            );
        });
    };

    const handleDownload = () => {
        console.log(recieverFiles);
    };

    return (
        <div id='reciever-file-success'>
            <div className='container'>
                <h2>Your files:</h2>
                {recieverFiles.length}
                {recieverFiles.length}
                <ul className='files-list'>
                    {recieverFiles ? renderFilesList() : <div>Loading...</div>}
                </ul>
                <button className='btn' onClick={handleDownload}>
                    Download files
                </button>
            </div>
        </div>
    );
};

export default RecieveFilesSuccess;
