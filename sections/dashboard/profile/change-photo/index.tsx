'use client'

import ModalChangeBackground from "@components/modal/change-background-profile";
import ModalChangeProfile from "@components/modal/change-profile";
import { useProfile } from "@context/auth";
import { useModal } from "@hooks/modal-global";
import { API_KEY, URL_DUMMY_IMAGE, USERS_BACKGROUND_PHOTO, USERS_DELETE_BACKGROUND_PHOTO, USERS_DELETE_PROFILE_PICTURE, USERS_PROFILE_PICTURE } from "@utils/endpoint";
import FileUploader from "@utils/image-uploader";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { TbCamera, TbEdit } from "react-icons/tb";

const ChangePhoto = () => {
    const [photo, setPhoto] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const { userInfo } = useProfile()
    const [open, setOpen] = useState(false)
    const [openBackground, setOpenBackground] = useState(false)
    const { setModal } = useModal()
    const { data } = useSession()
    const [loading, setLoading] = useState(false)
    const TOKEN = data?.user.token
    const formData = new FormData();
    formData.append('profilePicture', selectedFile);
    formData.append('backgroundPhoto', selectedFile);

    const onSubmit = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${API_KEY + USERS_PROFILE_PICTURE}`, { profilePicture: formData.get('profilePicture') }, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
                    "Content-Type": "multipart/form-data",
                    "Accept": "multipart/form-data"
                }
            });

            if (res.status === 200) {
                setLoading(false)
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'actualizar el éxito de las redes sociales',
                    function: () => {
                        window.location.reload()
                    }
                });
                setOpen(false)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const onSubmitBackground = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${API_KEY + USERS_BACKGROUND_PHOTO}`, { backgroundPhoto: formData.get('backgroundPhoto') }, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
                    "Content-Type": "multipart/form-data",
                    "Accept": "multipart/form-data"
                }
            });

            if (res.status === 200) {
                setLoading(false)
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'actualizar el éxito de las redes sociales',
                    function: () => {
                        window.location.reload()
                    }
                });
                setOpenBackground(false)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const onDeleteProfile = async () => {
        setLoading(true)
        try {
            const res = await axios.delete(`${API_KEY + USERS_DELETE_PROFILE_PICTURE}`, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
                }
            });

            if (res.status === 200) {
                setLoading(false)
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'actualizar el éxito de las redes sociales',
                    function: () => {
                        window.location.reload()
                    }
                });
                setOpen(false)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const onDeleteBackground = async () => {
        setLoading(true)
        try {
            const res = await axios.delete(`${API_KEY + USERS_DELETE_BACKGROUND_PHOTO}`, {
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
                }
            });

            if (res.status === 200) {
                setLoading(false)
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    subTitle: 'actualizar el éxito de las redes sociales',
                    function: () => {
                        window.location.reload()
                    }
                });
                setOpenBackground(false)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className="w-full relative min-h-[300px]">
                <Image src={
                    userInfo.backgroundPicture === '' || userInfo.backgroundPicture == null
                        ? '/assets/profile/bg.png'
                        : userInfo.backgroundPicture
                } fill alt="Profile Background - (Avanzu)" className="object-cover rounded-2xl object-center" />
                <div className="absolute w-full flex justify-end p-4">
                    <FileUploader
                        id="background-upload"
                        onFileSelect={(file) => setSelectedFile(file)}
                        setPhoto={setPhoto}
                        setSelectedFile={setSelectedFile}
                        setOpen={setOpenBackground}
                    />
                    <label htmlFor="background-upload" className="bg-purple-300 rounded-full p-3">
                        <TbEdit className="text-white text-xl" />
                    </label>
                </div>
                <div className="absolute flex min-h-full items-end justify-start p-4">
                    <div className="relative">
                        <FileUploader
                            setSelectedFile={setSelectedFile}
                            id="file-upload"
                            onFileSelect={(file) => setSelectedFile(file)}
                            setPhoto={setPhoto}
                            setOpen={setOpen}
                        />
                        <label htmlFor="file-upload" className="rounded-full border-4 flex items-center w-full justify-center border-white relative min-w-[140px] min-h-[140px] overflow-hidden">
                            <Image
                                src={
                                    userInfo.profilePicture && userInfo.profilePicture !== ''
                                        ? userInfo.profilePicture
                                        : userInfo.name && userInfo.name !== ''
                                            ? `${URL_DUMMY_IMAGE}?name=${userInfo.name}&size=120`
                                            : `${URL_DUMMY_IMAGE}?name=user&size=120`
                                }
                                fill
                                className="object-cover object-center rounded-full" alt="Profile User - (Avanzu)" />
                            <div className="absolute w-full bottom-0 bg-base-dark/60 flex justify-center p-2">
                                <TbCamera className="text-white text-2xl" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            {
                open &&
                <ModalChangeProfile
                    open={open}
                    setSelectedFile={setSelectedFile}
                    setPhoto={setPhoto}
                    submit={onSubmit}
                    setOpen={setOpen}
                    deleteProfile={onDeleteProfile}
                    file={photo}
                    loading={loading}
                />
            }
            {
                openBackground &&
                <ModalChangeBackground
                    open={openBackground}
                    loading={loading}
                    deleteBackground={onDeleteBackground}
                    setSelectedFile={setSelectedFile}
                    setPhoto={setPhoto}
                    submit={onSubmitBackground}
                    setOpen={setOpenBackground}
                    file={photo}
                />
            }
        </>
    );
}

export default ChangePhoto;