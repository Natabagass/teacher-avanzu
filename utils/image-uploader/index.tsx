'use client'

import { useRef } from 'react';

import PropTypes from 'prop-types';
import { useModal } from '@hooks/modal-global';

const FileUploader = ({ onFileSelect, setPhoto, setSelectedFile, id }: { id: string, setSelectedFile: any, onFileSelect: any, setPhoto: any }) => {
    const fileInput: any = useRef(null);
    const { setModal } = useModal()

    const handleFileInput = (e: any) => {
        const file = e.target.files[0];
        const size = Math.floor(file.size / 1024)
        if (size < 5000) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
            onFileSelect(e.target.files[0]);
        } else {
            setModal({
                type: 'fail',
                placement: 'center',
                title: 'Fallido',
                desc: 'El tamaño de tu imagen es demasiado grande',
                function: () => {
                    setSelectedFile('')
                    setPhoto('')
                }
            })
        }
    };

    return (
        <div className='hidden'>
            <input
                id={id}
                type='file'
                accept='image/png, image/jpg, image/jpeg'
                onChange={handleFileInput}
                className='hidden'
            />
            <button
                onClick={(e: any) => fileInput.current && fileInput.current.click()}
                className=''
            ></button>
        </div>
    );
};

FileUploader.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
    setPhoto: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default FileUploader;
