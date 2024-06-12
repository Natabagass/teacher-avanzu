'use client'

import Text from "@components/text";
import FilesUpload from "@utils/file-uploader";
import VideoUploader from "@utils/video-uploader";
import { submitFile } from "app/api/utils/upload_file";
import { Lesson, Module } from "data/types/interface/create-course";
import { Session } from "next-auth";
import { Dispatch, SetStateAction, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { IoPlayOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbUpload } from "react-icons/tb";

const LessonsList = ({
    setModules,
    session,
    setFiles,
    sub,
    setVideo,
    page,
    modules
}: {
    setModules: Dispatch<SetStateAction<Module[]>>,
    modules: Module[],
    setFiles: Dispatch<SetStateAction<string>>,
    page: number,
    sub: any,
    session: Session | null
    setVideo: Dispatch<SetStateAction<string>>,
}) => {
    const [selectedVideo, setSelectedVideo] = useState<Record<string, File>>({})
    const [loading, setLoading] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState<Record<string, File>>({});
    const [openModule, setOpenModules] = useState(0)

    const updateLesson = (moduleIndex: number, lessonIndex: number, field: keyof Lesson, value: string | File | null) => {
        setModules(prevModules => {
            const newModules = [...prevModules];
            const updatedLesson: Partial<Lesson> = {
                [field]: value
            };
            newModules[moduleIndex].lessons[lessonIndex] = {
                ...newModules[moduleIndex].lessons[lessonIndex],
                ...updatedLesson
            };
            return newModules;
        });
    };

    const handleFileSelect = (file: File, moduleIndex: number, lessonIndex: number, field: keyof Lesson) => {
        const key = `${moduleIndex}-${lessonIndex}`;
        if (field === 'video') {
            setSelectedVideo((prev) => {
                const newState = {
                    ...prev,
                    [key]: file
                };
                handleFileSubmit(moduleIndex, lessonIndex, field, file);
                return newState;
            });
        } else {
            setSelectedFiles((prev) => {
                const newState = {
                    ...prev,
                    [key]: file
                };
                handleFileSubmit(moduleIndex, lessonIndex, field, file);
                return newState;
            });
        }
    };

    const handleFileSubmit = async (moduleIndex: number, lessonIndex: number, field: keyof Lesson, value: string | File | null) => {
        if (value) {
            const formData = new FormData();
            formData.append('file', value);

            if (session) {
                const token = session.user.token;
                setLoading(true);
                try {
                    const res = await submitFile(token, formData, setLoading);
                    if (res.identifier) {
                        updateLesson(moduleIndex, lessonIndex, field, res.identifier);
                    }
                } catch (error) {
                    console.error('Error uploading file:', error);
                } finally {
                    setLoading(false);
                }
            }
        }
    };

    return (
        <div className="flex w-full rounded-3xl flex-col gap-4 border border-stroke-primary p-4">
            <div onClick={() => setOpenModules(sub.order === openModule ? 0 : sub.order)} className="flex flex-row w-full items-center justify-between">
                <Text size="p1" weight="font-semibold" variant="title">{sub.title}</Text>
                <RiArrowDownSLine className={`${openModule === sub.order && 'rotate-180'} text-white text-xl`} />
            </div>
            {
                openModule === sub.order &&
                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-col gap-2">
                        <Text size="p3" weight="font-normal" variant="subTitle">Subir vídeo</Text>
                        <label htmlFor={`upload-video-${page}-${sub.id}`} className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                            <VideoUploader
                                id={`upload-video-${page}-${sub.id}`}
                                onFileSelect={(file) => handleFileSelect(file, page - 1, sub.id - 1, 'video')}
                                setVideo={setVideo}
                                setSelectedFile={setSelectedVideo}
                            />
                            <div className="flex flex-row w-full items-center gap-3">
                                {
                                    selectedVideo[`${page - 1}-${sub.id - 1}`] || sub.video ?
                                        <div className="flex flex-row w-full items-center justify-between">
                                            <div className="flex flex-row items-center w-full gap-2">
                                                <div className="rounded-full bg-purple-blue-500 p-3">
                                                    <IoPlayOutline className="text-white text-2xl" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {
                                                        selectedVideo[`${page - 1}-${sub.id - 1}`] ?
                                                            <>
                                                                <Text size="p2" weight="font-semibold" variant="subTitle">{selectedVideo[`${page - 1}-${sub.id - 1}`]?.name || "Video"}</Text>
                                                                <Text size="p3" weight="font-normal" color="text-content-secondary" variant="subTitle-sub">{Math.floor(selectedVideo[`${page - 1}-${sub.id - 1}`]?.size / (1024 * 1024)) || 0} MB</Text>
                                                            </>
                                                            :
                                                            <Text size="p2" weight="font-semibold" variant="subTitle">{sub.video}</Text>
                                                    }
                                                </div>
                                            </div>
                                            {
                                                loading &&
                                                <div className="flex justify-end">
                                                    <BiLoader className="text-purple-blue-500 animate-spin text-2xl" />
                                                </div>
                                            }
                                        </div>
                                        :
                                        <>
                                            <div className="rounded-full bg-purple-blue-500 p-3">
                                                <TbUpload className="text-white text-2xl" />
                                            </div>
                                            <Text size="p2" weight="font-semibold" variant="subTitle">Sube tu vídeo</Text>
                                        </>
                                }
                            </div>
                        </label>
                    </div>
                    <div className="flex w-full flex-col">
                        <Text
                            size="p3"
                            variant="label"
                            weight="font-normal"
                            color="text-content-secondary"
                        >
                            Nombre del curso
                        </Text>
                        <div className={`mt-2 w-full relative `}>
                            <input
                                type="text"
                                className='border-stroke-primary bg-purple-100 outline-none px-6 py-3 placeholder:text-sm text-white border w-full rounded-3xl'
                                placeholder="Escribe el nombre de tu curso"
                                defaultValue={modules[page - 1].lessons[sub.id - 1].title}
                                onChange={(e) => updateLesson(page - 1, sub.id - 1, 'title', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <Text
                            size="p3"
                            variant="label"
                            weight="font-normal"
                            color="text-content-secondary"
                        >
                            Descripción
                        </Text>
                        <div className={`mt-2 w-full relative `}>
                            <textarea
                                className='border-stroke-primary bg-purple-100 outline-none px-6 py-3 placeholder:text-sm text-white border w-full rounded-3xl'
                                placeholder="Escribe la descripción de tu curso."
                                maxLength={300}
                                defaultValue={modules[page - 1].lessons[sub.id - 1].description}
                                onChange={(e) => updateLesson(page - 1, sub.id - 1, 'description', e.target.value)}
                            />
                            <div className="w-full flex justify-end">
                                <Text size="p2" weight="font-normal" color="text-content-secondary">{sub.description?.length ? sub.description?.length : 0}/300</Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Text size="p3" weight="font-normal" variant="subTitle">Adjunto</Text>
                        <label htmlFor={`files-upload-${page}-${sub.id}`} className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                            <FilesUpload
                                id={`files-upload-${page}-${sub.id}`}
                                onFileSelect={(file) => handleFileSelect(file, page - 1, sub.id - 1, 'attachment')}
                                setFiles={setFiles}
                                setSelectedFile={setSelectedFiles}
                            />
                            <div className="flex flex-row w-full items-center gap-3">
                                {
                                    selectedFiles[`${page - 1}-${sub.id - 1}`] || sub.attachment ?
                                        <div className="flex flex-row w-full items-center justify-between">
                                            <div className="flex flex-row items-center w-full gap-2">
                                                <div className="rounded-full bg-purple-blue-500 p-3">
                                                    <TbUpload className="text-white text-2xl" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {
                                                        selectedFiles[`${page - 1}-${sub.id - 1}`] ?
                                                            <>
                                                                <Text size="p2" weight="font-semibold" variant="subTitle">
                                                                    {selectedFiles[`${page - 1}-${sub.id - 1}`]?.name || "File"}
                                                                </Text>
                                                                <Text size="p3" weight="font-normal" color="text-content-secondary" variant="subTitle-sub">
                                                                    {Math.floor(selectedFiles[`${page - 1}-${sub.id - 1}`]?.size / (1024 * 1024)) || 0} MB
                                                                </Text>
                                                            </>
                                                            :
                                                            <Text size="p2" weight="font-semibold" variant="subTitle">
                                                                {sub.attachment}
                                                            </Text>
                                                    }
                                                </div>
                                            </div>
                                            {
                                                loading &&
                                                <div className="flex justify-end">
                                                    <BiLoader className="text-purple-blue-500 animate-spin text-2xl" />
                                                </div>
                                            }
                                        </div>
                                        :
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="rounded-full bg-purple-blue-500 p-3">
                                                <TbUpload className="text-white text-2xl" />
                                            </div>
                                            <div>
                                                <Text size="p2" weight="font-semibold" variant="subTitle">Sube tu archivo adjunto</Text>
                                                <Text size="p3" color="text-content-secondary" weight="font-normal" variant="subTitle-sub">mp4,docs,mp3</Text>
                                            </div>
                                        </div>
                                }
                            </div>
                        </label>
                    </div>
                </div>
            }
        </div>
    );
}

export default LessonsList;