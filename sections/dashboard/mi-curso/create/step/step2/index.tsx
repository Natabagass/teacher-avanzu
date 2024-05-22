import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import FilesUpload from "@utils/file-uploader";
import VideoUploader from "@utils/video-uploader";
import { CreateCourseSchema } from "data/schema/create-course";
import { Dispatch, SetStateAction, useState } from "react";
import { FieldErrors, FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { IoPlayOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbPlus, TbStar, TbUpload, TbVideo } from "react-icons/tb";

type Props<T extends FieldValues> = {
    next: () => void,
    goto: (id: number) => void,
    watch: any,
    register: UseFormRegister<T>;
    error: FieldErrors;
    setVideo: Dispatch<SetStateAction<string>>,
    setSelectedVideo: any,
    selectedVideo: any,
    setFiles: Dispatch<SetStateAction<string>>,
    setSelectedFiles: any,
    selectedFiles: any,
    // control: any;
    // resetField: any
};


interface Lesson {
    index: number;
    title: string;
    order: number;
    description: string;
    video: string;
    file: File | null;
}

interface Module {
    id: number;
    title: string;
    order: number;
    lessons: Lesson[];
}

const defaultLesson = (index: number): Lesson => ({
    index,
    title: `Lesson ${index}`,
    order: index,
    description: '',
    video: '',
    file: null,
});

const defaultModule = (id: number): Module => ({
    id,
    title: `Modulo ${id}`,
    order: id,
    lessons: [],
});

const CrearCursoStep2 = ({
    next,
    goto,
    register,
    error,
    watch,
    setVideo,
    selectedVideo,
    setSelectedVideo,
    selectedFiles,
    setSelectedFiles,
    setFiles
}: Props<CreateCourseSchema>) => {
    const [page, setPage] = useState(1)
    const [modules, setModules] = useState<Module[]>([defaultModule(1)]);
    const [openModule, setOpenModules] = useState(0)

    const addModule = () => {
        const newModuleId = modules.length + 1;
        setModules([...modules, defaultModule(newModuleId)]);
        setPage(newModuleId);
    };

    // const updateModuleTitle = (index: number, title: string) => {
    //     const newModules = [...modules];
    //     newModules[index].title = title;
    //     setModules(newModules);
    // };

    const addLesson = (moduleIndex: number) => {
        const newModules = [...modules];
        const newLessonIndex = newModules[moduleIndex].lessons.length + 1;
        newModules[moduleIndex].lessons.push(defaultLesson(newLessonIndex));
        setModules(newModules);
    };

    const updateLesson = (moduleIndex: number, lessonIndex: number, field: keyof Lesson, value: string | File | null) => {
        const newModules: Module[] = [...modules];
        const updatedLesson: Partial<Lesson> = {
            [field]: value
        };
        newModules[moduleIndex].lessons[lessonIndex] = {
            ...newModules[moduleIndex].lessons[lessonIndex],
            ...updatedLesson
        };
        setModules(newModules);
    };

    const handleFileChange = (moduleIndex: number, lessonIndex: number, file: File | null) => {
        const newModules = [...modules];
        newModules[moduleIndex].lessons[lessonIndex].file = file;
        setModules(newModules);
    };

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full max-w-full overflow-auto gap-4">
                    {
                        modules.map((item) => (
                            <div onClick={() => setPage(item.id)} key={item.id} className="flex cursor-pointer flex-col items-center w-[20%] gap-3">
                                <Text size="p3" weight="font-medium" color={page === item.id ? 'text-purple-blue-500' : 'text-content-secondary'}>{item.title}</Text>
                                <div className={`w-full h-border ${page === item.id ? 'bg-purple-blue-500 relative z-20' : 'bg-content-secondary'}`} />
                            </div>
                        ))
                    }
                    <div onClick={() => addModule()} className="flex mb-3 flex-row gap-2 items-center">
                        <TbPlus className="text-base text-neon-green-500" />
                        <Text size="p3" weight="font-medium" color="text-neon-green-500">Agregar modulo</Text>
                    </div>
                </div>
                <div className="h-border bg-content-tertiary -mt-[1px] w-full z-0 relative" />
                <div className="flex flex-col w-full gap-4 mt-8">
                    {modules
                        .filter((item) => item.id === page)
                        .map((item) =>
                            item.lessons.map((sub) => (
                                <div key={sub.index} className="flex w-full rounded-3xl flex-col gap-4 border border-stroke-primary p-4">
                                    <div onClick={() => setOpenModules(sub.index === openModule ? 0 : sub.index)} className="flex flex-row w-full items-center justify-between">
                                        <Text size="p1" weight="font-semibold" variant="title">{sub.title}</Text>
                                        <RiArrowDownSLine className="text-white text-xl" />
                                    </div>
                                    {
                                        openModule === sub.index &&
                                        <div className="flex flex-col w-full gap-4">
                                            <div className="flex flex-col gap-2">
                                                <Text size="p3" weight="font-normal" variant="subTitle">Subir vídeo</Text>
                                                <label htmlFor="upload-video" className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                                                    <VideoUploader
                                                        id="upload-video"
                                                        onFileSelect={(file) => setSelectedVideo(file)}
                                                        setVideo={setVideo}
                                                        setSelectedFile={setSelectedVideo}
                                                    />
                                                    <div className="flex flex-row items-center gap-3">
                                                        {
                                                            selectedVideo != '' ?
                                                                <>
                                                                    <div className="rounded-full bg-purple-blue-500 p-3">
                                                                        <IoPlayOutline className="text-white text-2xl" />
                                                                    </div>
                                                                    <div className="flex flex-col gap-2">
                                                                        <Text size="p2" weight="font-semibold" variant="subTitle">{selectedVideo.name}</Text>
                                                                        <Text size="p3" weight="font-normal" color="text-content-secondary" variant="subTitle-sub">{Math.floor(selectedVideo.size / (1024 * 1024))} MB</Text>
                                                                    </div>
                                                                </>
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
                                            <Input
                                                register={register}
                                                error={error}
                                                name="title"
                                                label="Nombre del curso"
                                                placeholder="Escribe el nombre de tu curso"
                                                leftIcon={false}
                                            />
                                            <div className="flex flex-col w-full gap-2">
                                                <Input
                                                    variant="textarea"
                                                    register={register}
                                                    label="Descripción"
                                                    placeholder="Escribe la descripción de tu curso."
                                                    error={error}
                                                    leftIcon={false}
                                                    name="desc"
                                                    max={300}
                                                />
                                                <div className="w-full flex justify-end">
                                                    <Text size="p2" weight="font-normal" color="text-content-secondary">{watch('desc')?.length ? watch('desc')?.length : 0}/300</Text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Text size="p3" weight="font-normal" variant="subTitle">Adjunto</Text>
                                                <label htmlFor="files-upload" className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                                                    <FilesUpload
                                                        id="files-upload"
                                                        onFileSelect={(file) => setSelectedFiles(file)}
                                                        setFiles={setFiles}
                                                        setSelectedFile={setSelectedFiles}
                                                    />
                                                    <div className="flex flex-row items-center gap-3">
                                                        {
                                                            selectedFiles != '' ?
                                                                <>
                                                                    <div className="rounded-full bg-purple-blue-500 p-3">
                                                                        <TbUpload className="text-white text-2xl" />
                                                                    </div>
                                                                    <div>
                                                                        <Text size="p2" weight="font-semibold" variant="subTitle">{selectedFiles.name}</Text>
                                                                        <Text size="p3" color="text-content-secondary" weight="font-normal" variant="subTitle-sub">{(selectedFiles.size / (1024 * 1024)).toFixed(1)} MB</Text>
                                                                    </div>
                                                                </>
                                                                :
                                                                <>
                                                                    <div className="rounded-full bg-purple-blue-500 p-3">
                                                                        <TbUpload className="text-white text-2xl" />
                                                                    </div>
                                                                    <div>
                                                                        <Text size="p2" weight="font-semibold" variant="subTitle">Sube tu archivo adjunto</Text>
                                                                        <Text size="p3" color="text-content-secondary" weight="font-normal" variant="subTitle-sub">mp4,docs,mp3</Text>
                                                                    </div>
                                                                </>
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
                <div className="flex flex-row w-full mt-6 justify-end gap-3">
                    <Button size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                        <TbVideo className="text-xl text-white" />
                        Agregar reunión de zoom
                    </Button>
                    <Button size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                        <TbStar className="text-xl text-white" />
                        Agregar cuestionario
                    </Button>
                    <Button onClick={() => addLesson(page - 1)} size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                        <TbPlus className="text-xl text-white" />
                        Agregar lección
                    </Button>
                </div>
            </div>
        </>
    );
}

export default CrearCursoStep2;