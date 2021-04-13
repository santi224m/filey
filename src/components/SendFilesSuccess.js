import { useEffect } from 'react';
import { storage } from '../firebase/config';
import CloseSession from './CloseSession';

const SendFilesSuccess = ({ code, files }) => {
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
    }, []);

    return (
        <div id='send-file-sucess-page'>
            <div className='container'>
                <h2>Enter the following code on the other device</h2>
                <h1>{code}</h1>
                <CloseSession code={code} />
            </div>
        </div>
    );
};

export default SendFilesSuccess;
