import { useState } from 'react';
import RecieveFiles from './RecieveFiles';
import RecieveFilesSuccess from './RecieverFilesSuccess';

const RecieveWrapper = () => {
    const [recieverCode, setRecieverCode] = useState('');
    const [recieverFiles, setRecieverFiles] = useState(null);
    const [downloadURLs, setDownloadURLs] = useState(null);

    return (
        <>
                            <RecieveFilesSuccess
                        downloadURLs={downloadURLs}
                        recieverFiles={recieverFiles}
                    />
        </>
    );
};

export default RecieveWrapper;
