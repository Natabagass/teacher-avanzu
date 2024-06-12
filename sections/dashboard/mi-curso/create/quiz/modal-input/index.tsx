import Text from "@components/text";
import { Module, Question, Quizzes } from "data/types/interface/create-course";
import { Dispatch, SetStateAction } from "react";

const ModalInputType = ({
    show,
    updateQuestion,
    page,
    sub,
    item,
    setShow
}: {
    show: boolean,
    sub: Quizzes,
    item: Question,
    page: number,
    setShow: Dispatch<SetStateAction<boolean>>,
    modules: Module[],
    updateQuestion: (mdId: number, qzId: number, qsId: number, field: keyof Question, value: string | null) => void
}) => {
    return (
        <>
            {
                show &&
                <div className="absolute bg-purple-100 overflow-auto max-h-[400px] mt-6 top-10 border border-stroke-primary rounded-3xl z-50 py-2 px-4 w-full">
                    <div className="flex flex-col w-full gap-2">
                        {typeData.map((datas, index) => (
                            <div key={index} className="flex flex-row w-full items-center justify-between">
                                <div
                                    onClick={() => {
                                        updateQuestion(page - 1, sub.id - 1, item.id - 1, 'type', datas.value)
                                        setShow(false)
                                    }}
                                    className="flex flex-row w-full items-center gap-2">
                                    <Text weight="font-base" size="p3">{datas.name}</Text>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
}

export default ModalInputType;

const typeData = [
    {
        name: 'Opción multiple',
        value: 'Options'
    },
    {
        name: 'Paragraph',
        value: 'Essay'
    },
]