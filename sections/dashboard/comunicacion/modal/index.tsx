'use client'

import Button from "@components/button";
import Input from "@components/input";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CreateAnswerCommunication from "./create-answer";
import ListAnswerCommunication from "./list-answer";
import { QNAItem, QNAItems } from "data/types/interface/course/qna";

const ModalComunicacion = ({
    state,
    setState,
    setRefresh
}: {
    state: { page: number, open: boolean, condition: boolean, answer: boolean, item: QNAItem },
    setRefresh: Dispatch<SetStateAction<boolean>>,
    setState: Dispatch<SetStateAction<{  page: number, open: boolean, answer: boolean, condition: boolean, item: QNAItem }>>,
}) => {
    return (
        <Modal
            onClick={() => { }}
            open={state.open}
            color="bg-purple-100"
            title={state.item.isAnswered && state.answer === true ? 'Lista de respuestas y preguntas' : 'Respuesta'}
            width="w-medium"
            placement="center"
            onOutsideClick={() => {
                setState({ ...state, open: false, item: QNAItems })
            }}
        >
            {
                state.item.isAnswered && state.answer === true ?
                    <>
                        <ListAnswerCommunication 
                            state={state} 
                            setRefresh={setRefresh} 
                            setState={setState} 
                        />
                    </>
                    :
                    <>
                        <CreateAnswerCommunication 
                            state={state} 
                            setState={setState} 
                            setRefresh={setRefresh}
                        />
                    </>
            }
        </Modal>
    );
}

export default ModalComunicacion;