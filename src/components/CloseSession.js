import { storage } from '../firebase/config';
import history from '../history';

const CloseSession = ({ code }) => {
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

    return (
        <a className='btn' onClick={handleSessionClose}>
            Close Session
        </a>
    );
};

export default CloseSession;
