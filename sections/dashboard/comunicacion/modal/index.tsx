'use client'

import Button from "@components/button";
import Input from "@components/input";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CreateAnswerCommunication from "./create-answer";

const ModalComunicacion = ({
    state,
    setState,
    setRefresh
}: {
    state: { open: boolean, id: number, status: boolean, courseID: number, page: number, answer: string, condition: boolean },
    setRefresh: Dispatch<SetStateAction<boolean>>,
    setState: Dispatch<SetStateAction<{ id: number, open: boolean, courseID: number, status: boolean, page: number, answer: string, condition: boolean }>>,
}) => {
    return (
        <Modal
            onClick={() => { }}
            open={state.open}
            color="bg-purple-100"
            title="Respuesta"
            width="w-medium"
            placement="center"
            onOutsideClick={() => {
                setState({ ...state, open: false, status: false, id: 0, courseID: 0 })
            }}
        >
            {
                state.status ?
                    <>
                        <div className="w-full bg-purple-200 rounded-xl border items-center border-stroke-primary p-6 flex flex-col gap-4">
                            <Text size="h2" weight="font-bold" variant="title">Tu respuesta</Text>
                            <div className="bg-purple-100 w-full border border-stroke-primary p-4 text-center rounded-2xl">
                                <Text size="p1" weight="font-medium">{state.answer}</Text>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <CreateAnswerCommunication state={state} setState={setState} setRefresh={setRefresh} />
                    </>
            }
        </Modal>
    );
}

export default ModalComunicacion;