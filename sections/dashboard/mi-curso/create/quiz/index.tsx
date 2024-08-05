import Select from "@components/select";
import Text from "@components/text";
import { Listbox, ListboxOption } from "@headlessui/react";
import { Answer, Module, Question, Quizzes } from "data/types/interface/create-course";
import { Dispatch, SetStateAction, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbPlus, TbUpload } from "react-icons/tb";
import SelectPregunta from "./select";
import { submitFile } from "app/api/utils/upload_file";
import { Session } from "next-auth";
import FilesUpload from "@utils/file-uploader";
import { BiLoader } from "react-icons/bi";

const QuizList = ({
    sub,
    modules,
    session,
    setModules,
    page,
    control
}: {
    sub: Quizzes,
    setModules: Dispatch<SetStateAction<Module[]>>,
    modules: Module[],
    page: number,
    session: Session | null,
    control: any
}) => {
    const [openModule, setOpenModules] = useState(0)
    const [openQuestion, setOpenQuestion] = useState(0)
    const [selectedQuiz, setSelectedQuiz] = useState<Record<string, File>>({});
    const [loading, setLoading] = useState(false)
    const [files, setFiles] = useState('')

    const defaultAnswer = (ids: number): Answer => ({
        id: ids,
        answer: '',
        isAnswer: false
    })

    const defaultQuestion = (id: number): Question => ({
        type: 'Options',
        title: `No ${id}`,
        question: '',
        id: id,
        description: '',
        options: '',
        answers: [
            defaultAnswer(1),
            defaultAnswer(2),
            defaultAnswer(3),
            defaultAnswer(4)
        ]
    });

    const handleFileSelect = (file: File, moduleIndex: number, quizIndex: number, field: keyof Quizzes) => {
        const key = `${moduleIndex}-${quizIndex}`;
        setSelectedQuiz((prev) => {
            const newState = {
                ...prev,
                [key]: file
            };
            handleFileSubmit(moduleIndex, quizIndex, field, file);
            return newState;
        });
    };

    const handleFileSubmit = async (moduleIndex: number, quizIndex: number, field: keyof Quizzes, value: File) => {
        if (value) {
            const formData = new FormData();
            formData.append('file', value);
    
            if (session) {
                const token = session.user.token;
                setLoading(true);
                try {
                    const res = await submitFile(token, formData, setLoading);
                    if (res.identifier) {
                        updateQuiz(moduleIndex, quizIndex, field, res.identifier);
                    }
                } catch (error) {
                    console.error('Error uploading file:', error);
                } finally {
                    setLoading(false);
                }
            }
        }
    };

    const updateQuiz = (moduleIndex: number, quizIndex: number, field: keyof Quizzes, value: string) => {
        setModules(prevModules => {
            const newModules = [...prevModules];
            const updatedQuiz = {
                ...newModules[moduleIndex].quizzes[quizIndex],
                [field]: value
            };
            newModules[moduleIndex].quizzes[quizIndex] = updatedQuiz;
            return newModules;
        });
    };

    const updateAnswer = (moduleIndex: number, quizIndex: number, questionIndex: number, answerIndex: number, field: keyof Answer, value: string | boolean) => {
        setModules(prevModules => {
            const newModules = [...prevModules];
            const updatedAnswer: Partial<Answer> = {
                [field]: value
            };
            newModules[moduleIndex].quizzes[quizIndex].questions[questionIndex].answers[answerIndex] = {
                ...newModules[moduleIndex].quizzes[quizIndex].questions[questionIndex].answers[answerIndex],
                ...updatedAnswer
            };
            return newModules;
        });
    };

    const updateQuestion = (moduleIndex: number, quizIndex: number, questionIndex: number, field: keyof Question, value: string | null) => {
        setModules(prevModules => {
            const newModules = [...prevModules];
            const updatedQuestion: Partial<Question> = {
                [field]: value
            };
            newModules[moduleIndex].quizzes[quizIndex].questions[questionIndex] = {
                ...newModules[moduleIndex].quizzes[quizIndex].questions[questionIndex],
                ...updatedQuestion
            };
            return newModules;
        });
    };

    const addQuestion = (moduleIndex: number, quizIndex: number) => {
        const newModules = [...modules];
        const newQuestionId = newModules[moduleIndex].quizzes[quizIndex].questions.length + 1;
        const newQuestion = defaultQuestion(newQuestionId);
        newModules[moduleIndex].quizzes[quizIndex].questions.push(newQuestion);
        setModules(newModules);
    };

    const selectAnswer = (moduleIndex: number, quizIndex: number, questionIndex: number, answerId: number) => {
        const newModules = [...modules];
        const question = newModules[moduleIndex].quizzes[quizIndex].questions[questionIndex];
        question.answers = question.answers.map(answer => ({
            ...answer,
            isAnswer: answer.id === answerId
        }));
        setModules(newModules);
    };

    return (
        <div className="flex w-full rounded-3xl flex-col gap-4 border border-stroke-primary p-4">
            <div onClick={() => setOpenModules(sub.order === openModule ? 0 : sub.order)} className="flex flex-row w-full items-center justify-between">
                <Text size="p1" weight="font-semibold" variant="title">{sub.title}</Text>
                <RiArrowDownSLine className={`${openModule === sub.order && 'rotate-180'} text-white text-xl`} />
            </div>
            {
                openModule === sub.order &&
                <div className="flex flex-row items-start w-full gap-3">
                    <div className="max-h-[500px] flex flex-col gap-3 overflow-auto w-full">
                        {
                            sub.questions.length > 0 ?
                                sub.questions.map((item, index) => (
                                    <div key={index} className="w-full border border-stroke-primary p-3 flex flex-col gap-3 rounded-2xl">
                                        <div onClick={() => setOpenQuestion(item.id === openQuestion ? 0 : item.id)}>
                                            <div className="flex flex-row w-full items-center justify-between">
                                                <Text size="p1" weight="font-semibold" variant="title">No {item.id}</Text>
                                                <RiArrowDownSLine className="text-white text-xl" />
                                            </div>
                                        </div>
                                        {
                                            openQuestion === item.id &&
                                            <div className="flex flex-col w-full gap-2">
                                                <div className="flex flex-row w-full gap-2">
                                                    <div className="flex w-full flex-col">
                                                        <Text
                                                            size="p3"
                                                            variant="label"
                                                            weight="font-normal"
                                                            color="text-content-secondary"
                                                        >
                                                            Pregunta
                                                        </Text>
                                                        <div className={`mt-2 w-full relative `}>
                                                            <input
                                                                type="text"
                                                                className='border-stroke-primary bg-purple-100 outline-none px-6 py-3 placeholder:text-sm text-white border w-full rounded-3xl'
                                                                placeholder="Escribe pregunta"
                                                                defaultValue={modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].question}
                                                                onChange={(e) => updateQuestion(page - 1, sub.id - 1, item.id - 1, 'question', e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex w-1/2 flex-col">
                                                        <SelectPregunta
                                                            page={page}
                                                            sub={sub}
                                                            modules={modules}
                                                            item={item}
                                                            updateQuestion={updateQuestion}
                                                        />
                                                    </div>
                                                </div>
                                                {
                                                    modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].type === 'Essay' ?
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
                                                                    defaultValue={modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].description}
                                                                    onChange={(e) => updateQuestion(page - 1, sub.id - 1, item.id - 1, 'description', e.target.value)}
                                                                />
                                                                <div className="w-full flex justify-end">
                                                                    <Text size="p2" weight="font-normal" color="text-content-secondary">{item?.description?.length ? item?.description?.length : 0}/300</Text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <>
                                                            {
                                                                item.answers.map((datas, index) => (
                                                                    <div key={datas.id} className="flex flex-col gap-4">
                                                                        <div className="relative flex flex-row items-center w-full gap-2">
                                                                            <div className="w-full">
                                                                                <input
                                                                                    type="text"
                                                                                    placeholder={`Escribe la opción número ${index + 1}`}
                                                                                    defaultValue={modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].answers[index].answer}
                                                                                    className="bg-transparent placeholder:text-sm text-white outline-none ring-0 my-2 border-b px-4 py-2 border-stroke-primary w-full"
                                                                                    onChange={(e) => updateAnswer(page - 1, sub.id - 1, item.id - 1, index, 'answer', e.target.value)}
                                                                                />
                                                                            </div>
                                                                            <div className="absolute right-0 top-5 flex text-white items-center gap-2">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={`answer-${index}`}
                                                                                    className="check-cart"
                                                                                    defaultChecked={modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].answers[index].isAnswer}
                                                                                    checked={modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].answers[index].isAnswer}
                                                                                    onChange={(e) => selectAnswer(page - 1, sub.id - 1, item.id - 1, index + 1)}
                                                                                />
                                                                                <label htmlFor={`answer-${index}`} className="text-sm text-white">
                                                                                    <Text weight="font-medium" size="p3">Establecer como respuesta</Text>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </>
                                                }
                                            </div>
                                        }
                                    </div>
                                ))
                                :
                                <div className="w-full flex items-center">
                                    <Text size="h3" variant="subTitle" weight="font-semibold">Agrega tu pregunta</Text>
                                </div>
                        }
                        <div className="flex flex-col gap-2">
                            <Text size="p3" weight="font-normal" variant="subTitle">Adjunto</Text>
                            <label htmlFor={`files-quiz-${page}-${sub.id}`} className="flex flex-row w-full p-4 justify-between border border-stroke-primary rounded-xl">
                                <FilesUpload
                                    id={`files-quiz-${page}-${sub.id}`}
                                    onFileSelect={(file) => handleFileSelect(file, page - 1, sub.id - 1, "attachment")}
                                    setFiles={setFiles}
                                    setSelectedFile={setSelectedQuiz}
                                />
                                <div className="flex flex-row w-full items-center gap-3">
                                    {
                                        selectedQuiz[`${page - 1}-${sub.id - 1}`] || sub.attachment ?
                                            <div className="flex flex-row w-full items-center justify-between">
                                                <div className="flex flex-row items-center w-full gap-2">
                                                    <div className="rounded-full bg-purple-blue-500 p-3">
                                                        <TbUpload className="text-white text-2xl" />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        {
                                                            selectedQuiz[`${page - 1}-${sub.id - 1}`] ?
                                                                <>
                                                                    <Text size="p2" weight="font-semibold" variant="subTitle">
                                                                        {selectedQuiz[`${page - 1}-${sub.id - 1}`]?.name || "File"}
                                                                    </Text>
                                                                    <Text size="p3" weight="font-normal" color="text-content-secondary" variant="subTitle-sub">
                                                                        {Math.floor(selectedQuiz[`${page - 1}-${sub.id - 1}`]?.size / (1024 * 1024)) || 0} MB
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
                    <div onClick={() => {
                        if (modules[page - 1].quizzes[sub.id - 1].questions.length < 5) {
                            addQuestion(page - 1, sub.id - 1)
                        }
                    }} 
                        className={`${modules[page - 1].quizzes[sub.id - 1].questions.length < 5 ? 'bg-neon-green-300' : 'bg-neon-green-500/40 cursor-not-allowed'} rounded-full  p-4`}>
                        <TbPlus className="text-2xl text-base-dark" />
                    </div>
                </div>
            }
        </div>
    );
}

export default QuizList;

const dummy = [
    {
        name: 'Opción multiple',
        value: 'Options'
    },
    {
        name: 'Paragraph',
        value: 'Essay'
    },
]