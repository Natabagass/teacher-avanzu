import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useModal } from '@hooks/modal-global';

const VideoUploader = ({ onFileSelect, setVideo, setSelectedFile, id }: { id: string, setSelectedFile: any, onFileSelect: any, setVideo: any }) => {
    const fileInput: any = useRef(null);
    const { setModal } = useModal();

    const [loading, setLoading] = useState(false);

    const handleFileInput = (e: any) => {
        const file = e.target.files[0];
        const size = Math.floor(file.size / (1024 * 1024));
        if (size < 150000) {
            setLoading(true);
            setVideo(URL.createObjectURL(e.target.files[0]));
            onFileSelect(e.target.files[0]);
            setLoading(false);
        } else {
            setModal({
                type: 'fail',
                placement: 'center',
                title: 'Fallido',
                desc: 'El tamaño de tu video es demasiado grande',
                function: () => {
                    setSelectedFile('');
                    setVideo('');
                }
            });
        }
    };

    return (
        <div className='hidden'>
            <input
                id={id}
                type='file'
                accept='video/mp4, video/x-m4v, video/*'
                onChange={handleFileInput}
                className='hidden'
            />
            <button
                onClick={(e: any) => fileInput.current && fileInput.current.click()}
                className=''
            ></button>
            {loading && <div className="loading-indicator">Loading...</div>}
        </div>
    );
};

VideoUploader.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
    setVideo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default VideoUploader;
