'use client'

import Text from "@components/text";
import { useState } from "react";
import ModalInputType from "../modal-input";
import { Module, Question, Quizzes } from "data/types/interface/create-course";

const SelectPregunta = ({
    updateQuestion,
    page,
    sub,
    item,
    modules
}: {
    updateQuestion: (mdId: number, qzId: number, qsId: number, field: keyof Question, value: string | null) => void,
    sub: Quizzes,
    item: Question,
    page: number,
    modules: Module[]
}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="flex flex-col w-full">
            <Text
                size="p3"
                variant="label"
                weight="font-normal"
                color="text-content-secondary"
            >
                Tipo de pregunta
            </Text>
            <div className="flex flex-col w-full gap-4 relative">
                <div onClick={() => toggleModal()} className={`flex flex-row mt-2 items-center flex-wrap border border-stroke-primary text-white p-3 rounded-3xl bg-purple-100 relative cursor-pointer`}>
                    {modules[page - 1].quizzes[sub.id - 1].questions[item.id - 1].type}
                </div>
                <ModalInputType
                    show={showModal}
                    page={page}
                    setShow={setShowModal}
                    sub={sub}
                    modules={modules}
                    item={item}
                    updateQuestion={updateQuestion}
                />
            </div>
        </div>
    );
}

export default SelectPregunta;