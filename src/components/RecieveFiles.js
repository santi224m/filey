import history from '../history';

const RecieveFiles = ({ recieverCode, setRecieverCode }) => {
    const handleSubmit = e => {
        e.preventDefault();
        history.push('recieve-files-success');
    };

    return (
        <div id='recieve-files-page'>
            <div className='container'>
                <h1 className='heading'>Enter your code</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='code'
                        id='code-input'
                        value={recieverCode}
                        onChange={e => setRecieverCode(e.target.value)}
                    />
                    <button type='submit' className='btn btn-long'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RecieveFiles;
