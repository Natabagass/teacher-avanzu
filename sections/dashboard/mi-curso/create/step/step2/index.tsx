import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import FilesUpload from "@utils/file-uploader";
import VideoUploader from "@utils/video-uploader";
import { submitFile } from "app/api/utils/upload_file";
import { CreateCourseSchema } from "data/schema/create-course";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldErrors, FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { BiLoader } from "react-icons/bi";
import { IoPlayOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbPencil, TbPlus, TbStar, TbUpload, TbVideo } from "react-icons/tb";

type Props<T extends FieldValues> = {
    next: () => void,
    goto: (id: number) => void,
    watch: any,
    register: UseFormRegister<T>;
    error: FieldErrors;
    setVideo: Dispatch<SetStateAction<string>>,
    setValue: any,
    setFiles: Dispatch<SetStateAction<string>>,
    // control: any;
    // resetField: any
};


interface Lesson {
    title: string;
    order: number;
    description: string;
    video: string;
    attachment: string;
}

interface Module {
    title: string;
    order: number;
    lessons: Lesson[];
}

const CrearCursoStep2 = ({
    next,
    goto,
    register,
    error,
    watch,
    setVideo,
    setValue,
    setFiles
}: Props<CreateCourseSchema>) => {
    const [selectedVideo, setSelectedVideo] = useState<Record<string, File>>({})
    const [selectedFiles, setSelectedFiles] = useState<Record<string, File>>({});
    const [page, setPage] = useState(1)
    const [openModule, setOpenModules] = useState(0)
    const { data: session } = useSession();
    const [moduleTitle, setModuleTitle] = useState(0)
    const [loading, setLoading] = useState(false)

    const defaultLesson = (index: number): Lesson => ({
        title: `${watch('title') ? watch('title') : `Lesson ${index}`}`,
        order: index,
        description: `${watch('description') ? watch('description') : ''}`,
        video: '',
        attachment: '',
    });

    const defaultModule = (id: number): Module => ({
        title: `Modulo ${id}`,
        order: id,
        lessons: [],
    });

    const initialModules = watch('modules') ? JSON.parse(watch('modules')) : [];
    const [modules, setModules] = useState<Module[]>(initialModules);
    const addModule = () => {
        const newModuleId = modules.length + 1;
        setModules([...modules, defaultModule(newModuleId)]);
        setPage(newModuleId);
    };

    const updateModuleTitle = (index: number, title: string) => {
        const newModules = [...modules];
        newModules[index].title = title;
        setModules(newModules);
    };

    const addLesson = (moduleIndex: number) => {
        const newModules = [...modules];
        const newLessonIndex = newModules[moduleIndex].lessons.length + 1;
        newModules[moduleIndex].lessons.push(defaultLesson(newLessonIndex));
        setModules(newModules);
    };

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

    useEffect(() => {
        if (modules) {
            setValue('modules', JSON.stringify(modules))
        }
    }, [modules, setValue])

    useEffect(() => {
        const value = watch('modules')
        setModules(JSON.parse(value))
    }, [watch]);

    console.log(modules)

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full max-w-full overflow-auto gap-4">
                    {
                        modules.map((item) => (
                            <div onClick={() => {
                                setPage(item.order)
                                if (moduleTitle !== 0) {
                                    setModuleTitle(0);
                                }
                            }} key={item.order} className={`flex-col flex cursor-pointer items-center w-[20%] gap-3`}>
                                <div className="flex flex-row w-full justify-center items-center gap-3">
                                    {
                                        moduleTitle === item.order ?
                                            <div className="relative w-full">
                                                <input
                                                    type="text"
                                                    className='bg-transparent outline-none px-6 py-0 text-sm placeholder:text-sm text-white w-full'
                                                    placeholder="Módulo de título"
                                                    defaultValue={item.title}
                                                    onChange={(e) => updateModuleTitle(page - 1, e.target.value)}
                                                />
                                                <span
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setModuleTitle(0);
                                                    }}
                                                    className='absolute right-4 z-50 inset-y-1 cursor-pointer'
                                                >
                                                    <RxCross2 className="text-white text-xl" />
                                                </span>
                                            </div>
                                            :
                                            <div className="flex flex-row gap-2">
                                                <Text size="p3" weight="font-medium" className="whitespace-nowrap" color={page === item.order ? 'text-purple-blue-500' : 'text-content-secondary'}>{item.title}</Text>
                                                <div onClick={() => setModuleTitle(item.order)}>
                                                    {
                                                        page === item.order &&
                                                        <TbPencil className="text-purple-blue-500 text-xl" />
                                                    }
                                                </div>
                                            </div>
                                    }
                                </div>
                                <div className={`h-border w-full ${moduleTitle === item.order ? 'bg-purple-blue-500' : 'bg-transparent'} ${page === item.order ? 'bg-purple-blue-500 relative z-20' : 'bg-content-tertiary'}`} />
                            </div>
                        ))
                    }
                    <div onClick={() => addModule()} className="flex mb-3 flex-row gap-2 items-center">
                        <TbPlus className="text-base text-neon-green-500" />
                        <Text size="p3" weight="font-medium" className="whitespace-nowrap" color="text-neon-green-500">Agregar modulo</Text>
                    </div>
                </div>
                <div className="h-border bg-content-tertiary -mt-[1px] w-full z-0 relative" />
                <div className="flex flex-col w-full gap-4 mt-8">
                    {modules
                        .filter((item) => item.order === page)
                        .map((item) =>
                            item.lessons.map((sub) => (
                                <div key={sub.order} className="flex w-full rounded-3xl flex-col gap-4 border border-stroke-primary p-4">
                                    <div onClick={() => setOpenModules(sub.order === openModule ? 0 : sub.order)} className="flex flex-row w-full items-center justify-between">
                                        <Text size="p1" weight="font-semibold" variant="title">{sub.title}</Text>
                                        <RiArrowDownSLine className="text-white text-xl" />
                                    </div>
                                    {
                                        openModule === sub.order &&
                                        <div className="flex flex-col w-full gap-4">
                                            <div className="flex flex-col gap-2">
                                                <Text size="p3" weight="font-normal" variant="subTitle">Subir vídeo</Text>
                                                <label htmlFor="upload-video" className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                                                    <VideoUploader
                                                        id="upload-video"
                                                        onFileSelect={(file) => handleFileSelect(file, page - 1, sub.order - 1, 'video')}
                                                        setVideo={setVideo}
                                                        setSelectedFile={setSelectedVideo}
                                                    />
                                                    <div className="flex flex-row items-center gap-3">
                                                        {
                                                            selectedVideo[`${page - 1}-${sub.order - 1}`] ?
                                                                <div className="flex flex-row w-full justify-between">
                                                                    <div className="flex flex-row w-full gap-2">
                                                                        <div className="rounded-full bg-purple-blue-500 p-3">
                                                                            <IoPlayOutline className="text-white text-2xl" />
                                                                        </div>
                                                                        <div className="flex flex-col gap-2">
                                                                            <Text size="p2" weight="font-semibold" variant="subTitle">{selectedVideo[`${page - 1}-${sub.order - 1}`]?.name}</Text>
                                                                            <Text size="p3" weight="font-normal" color="text-content-secondary" variant="subTitle-sub">{Math.floor(selectedVideo[`${page - 1}-${sub.order - 1}`]?.size / (1024 * 1024))} MB</Text>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            loading &&
                                                                            <BiLoader className="text-purple-blue-500 animate-spin text-2xl" />
                                                                        }
                                                                    </div>
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
                                                        defaultValue={sub.title}
                                                        onChange={(e) => updateLesson(page - 1, sub.order - 1, 'title', e.target.value)}
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
                                                        defaultValue={sub.description}
                                                        onChange={(e) => updateLesson(page - 1, sub.order - 1, 'description', e.target.value)}
                                                    />
                                                    <div className="w-full flex justify-end">
                                                        <Text size="p2" weight="font-normal" color="text-content-secondary">{sub.description?.length ? sub.description?.length : 0}/300</Text>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Text size="p3" weight="font-normal" variant="subTitle">Adjunto</Text>
                                                <label htmlFor="files-upload" className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                                                    <FilesUpload
                                                        id="files-upload"
                                                        onFileSelect={(file) => handleFileSelect(file, page - 1, sub.order - 1, 'attachment')}
                                                        setFiles={setFiles}
                                                        setSelectedFile={setSelectedFiles}
                                                    />
                                                    <div
                                                        className="flex flex-row w-full items-center gap-3">
                                                        {
                                                            selectedFiles[`${page - 1}-${sub.order - 1}`] || sub.attachment ?
                                                                <>
                                                                    <div className="flex flex-row w-full items-center justify-between">
                                                                        <div className="flex flex-row items-center w-full gap-2">
                                                                            <div className="rounded-full bg-purple-blue-500 p-3">
                                                                                <TbUpload className="text-white text-2xl" />
                                                                            </div>
                                                                            <div className="flex flex-col gap-2">
                                                                                {
                                                                                    selectedFiles[`${page - 1}-${sub.order - 1}`]?.name && sub.attachment ?
                                                                                        <Text size="p2" weight="font-semibold" variant="subTitle">{sub.attachment}</Text>
                                                                                        :
                                                                                        <>
                                                                                            <Text size="p2" weight="font-semibold" variant="subTitle">{selectedFiles[`${page - 1}-${sub.order - 1}`]?.name || "File"}</Text>
                                                                                            <Text size="p3" weight="font-normal" color="text-content-secondary" variant="subTitle-sub">{Math.floor(selectedFiles[`${page - 1}-${sub.order - 1}`]?.size / (1024 * 1024)) || 0} MB</Text>
                                                                                        </>
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
                                                                </>
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
                            ))
                        )
                    }
                </div>
                {
                    modules.length > 0 &&
                    <div className="flex flex-row w-full mt-6 justify-end gap-3">
                        {/* <Button size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                            <TbVideo className="text-xl text-white" />
                            Agregar reunión de zoom
                        </Button> */}
                        <Button size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                            <TbStar className="text-xl text-white" />
                            Agregar cuestionario
                        </Button>
                        <Button onClick={() => addLesson(page - 1)} size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                            <TbPlus className="text-xl text-white" />
                            Agregar lección
                        </Button>
                    </div>
                }
            </div>
        </>
    );
}

export default CrearCursoStep2;