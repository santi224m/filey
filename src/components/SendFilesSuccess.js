import { useEffect } from 'react';
import { storage } from '../firebase/config';
import history from '../history';

const SendFilesSuccess = ({ code, files }) => {
    const handleSessionClose = () => {
        const storageRef = storage.ref().child('userFiles/' + code);
        storageRef.listAll().then(dir =>
            dir.items.forEach(item => {
                const itemRef = storage.ref().child(item.fullPath);
                itemRef.delete();
            })
        );

        history.push('/');
    };

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
                <a className='btn' onClick={handleSessionClose}>
                    Close Session
                </a>
            </div>
        </div>
    );
};

export default SendFilesSuccess;
