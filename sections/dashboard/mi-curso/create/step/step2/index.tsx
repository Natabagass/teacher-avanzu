import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import FilesUpload from "@utils/file-uploader";
import VideoUploader from "@utils/video-uploader";
import { submitFile } from "app/api/utils/upload_file";
import { CreateCourseSchema } from "data/schema/create-course";
import { Answer, Lesson, Module, Question, Quizzes } from "data/types/interface/create-course";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldErrors, FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { BiLoader } from "react-icons/bi";
import { IoPlayOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbPencil, TbPlus, TbStar, TbUpload, TbVideo } from "react-icons/tb";
import LessonsList from "../../lessons";
import QuizList from "../../quiz";

type Props<T extends FieldValues> = {
    next: () => void,
    goto: (id: number) => void,
    watch: any,
    register: UseFormRegister<T>;
    error: FieldErrors;
    setVideo: Dispatch<SetStateAction<string>>,
    setValue: any,
    setFiles: Dispatch<SetStateAction<string>>,
    control: any;
    // resetField: any
};

const CrearCursoStep2 = ({
    next,
    goto,
    register,
    control,
    error,
    watch,
    setVideo,
    setValue,
    setFiles
}: Props<CreateCourseSchema>) => {
    const [page, setPage] = useState(1)
    const { data: session } = useSession();
    const [moduleTitle, setModuleTitle] = useState(0)

    const defaultLesson = (id: number, order: number): Lesson => ({
        title: `Lección ${id}`,
        order: order,
        description: '',
        id: id,
        video: '',
        attachment: '',
    });

    const defaultQuiz = (id: number, order: number): Quizzes => ({
        title: `Prueba ${id}`,
        attachment: '',
        id: id,
        order: order,
        questions: [],
    });

    const defaultModule = (id: number): Module => ({
        title: `Modulo ${id}`,
        order: id,
        lessons: [],
        quizzes: []
    });

    const initialModules = watch('modules') ? watch('modules') : []

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
        const newOrder = newModules[moduleIndex].lessons.length + newModules[moduleIndex].quizzes.length + 1;
        newModules[moduleIndex].lessons.push(defaultLesson(newLessonIndex, newOrder));
        setModules(newModules);
    };

    const addQuiz = (moduleIndex: number) => {
        const newModules = [...modules];
        const newQuizId = newModules[moduleIndex].quizzes.length + 1;
        const newOrder = newModules[moduleIndex].lessons.length + newModules[moduleIndex].quizzes.length + 1;
        newModules[moduleIndex].quizzes.push(defaultQuiz(newQuizId, newOrder));
        setModules(newModules);
    };

    const getCombinedItems = (moduleIndex: number) => {
        const combined = modules[moduleIndex];
        if (!combined) return [];
        const combinedItems = [...combined?.lessons, ...combined?.quizzes];
        combinedItems.sort((a, b) => a.order - b.order);
        return combinedItems;
    };

    useEffect(() => {
        if (modules) {
            setValue('modules', modules);
        }
    }, [modules, setValue]);

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
                    {getCombinedItems(page - 1).map((item, index) => (
                        'questions' in item ? (
                            <div key={`quiz-${item.order}`}>
                                <QuizList
                                    sub={item}
                                    modules={modules}
                                    page={page}
                                    control={control}
                                    session={session}
                                    setModules={setModules}
                                />
                            </div>
                        ) : (
                            <div key={`lesson-${item.order}`}>
                                <LessonsList
                                    modules={modules}
                                    page={page}
                                    setFiles={setFiles}
                                    setVideo={setVideo}
                                    session={session}
                                    setModules={setModules}
                                    sub={item}
                                />
                            </div>
                        )
                    ))}
                </div>
                {
                    modules.length > 0 &&
                    <div className="flex flex-row w-full mt-6 justify-end gap-3">
                        {/* <Button size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
                            <TbVideo className="text-xl text-white" />
                            Agregar reunión de zoom
                        </Button> */}
                        <Button onClick={() => addQuiz(page - 1)} size="btn2" variant="secondary-subtle" type="button" className="flex flex-row items-center gap-2" padding="px-6 py-4">
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