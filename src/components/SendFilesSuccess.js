import { useEffect } from 'react';
import { storage } from '../firebase/config';
import CloseSession from './CloseSession';
import { Helmet } from 'react-helmet';

const SendFilesSuccess = ({ code }) => {
    useEffect(() => {
        return () => {
            const storageRef = storage.ref().child('userFiles/' + code);
            storageRef.listAll().then(dir =>
                dir.items.forEach(item => {
                    const itemRef = storage.ref().child(item.fullPath);
                    itemRef.delete();
                })
            );
        };
    }, [code]);

    return (
        <div id='send-file-sucess-page'>
            <Helmet>
                <title>Filey | Send Files</title>
            </Helmet>
            <div className='container'>
                <h2 className='heading'>
                    Enter the following code on the other device
                </h2>
                <h1 id='code'>{code}</h1>
                <CloseSession code={code} />
            </div>
        </div>
    );
};

export default SendFilesSuccess;
