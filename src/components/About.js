const About = () => {
    return (
        <div id='about-page'>
            <div id='header-section'>
                <h1 className='heading text-color-white text-center'>
                    Transfer between devices quickly
                </h1>
            </div>
            <div className='container'>
                <div id='about-page-content'>
                    <p className='p-1'>
                        Filey was made for those times that you have to transfer
                        a file from one device to another. Usually to do this,
                        you have to sign in to a cloud storage service on both
                        devices. If you're using a mobile device, then you may
                        also have to install an app to do the transfer. Filey
                        solves this by allowing you to transfer files without
                        signing in. All you have to do is upload your files on
                        one device and enter the code you are given on the
                        second device. You could even download the files on more
                        than one device if you have to share your files with
                        multiple people.
                    </p>

                    <h2 className='heading-strong'>Upload Files</h2>
                    <p className='p-1'>
                        Start by uploading your files from one of the devices.
                        Once you upload your files, you will receive a code that
                        you will use on the other device. Leave this page open
                        while you are transferring your files because once you
                        close the page the files will be deleted and you won't
                        be able to access them on the other device.
                    </p>
                    <img
                        src='/img/pages/upload-files.png'
                        alt='Upload Files Page'
                    />

                    <h2 className='heading-strong'>Download Files</h2>
                    <p className='p-1'>
                        Once you have uploaded your files and received you code,
                        you can use that code on your other devices. Download
                        the files to your device and close the session when you
                        are done. Closing the session deletes the files so that
                        no one can access them anymore. You can close the
                        session by clicking the "Close Session" button at the
                        bottom of the page or navigating to any other page on
                        the app.
                    </p>
                    <img
                        src='/img/pages/download-files.png'
                        alt='Download Files Page'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
