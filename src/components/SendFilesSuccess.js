const SendFilesSuccess = ({ code }) => {
    const handleSessionClose = () => {
        alert('Session closed');
    }

    return (
        <div id="send-file-sucess-page">
            <div className="container">
                <h2>Enter the following code on the other device</h2>
                <h1>{code}</h1>
                <a className="btn" onClick={handleSessionClose}>Close Session</a>
            </div>
        </div>
    );
}

export default SendFilesSuccess;