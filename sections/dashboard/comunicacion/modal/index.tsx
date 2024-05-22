'use client'

import Button from "@components/button";
import Input from "@components/input";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

const ModalComunicacion = ({
    state,
    setState
}: {
    state: { open: boolean, id: number, status: boolean, page: number, answer: string },
    setState: Dispatch<SetStateAction<{ id: number, open: boolean, status: boolean, page: number, answer: string }>>,
}) => {
    const { register, formState: { errors } } = useForm()
    console.log(state.id)
    return (
        <Modal
            onClick={() => { }}
            open={state.open}
            color="bg-purple-100"
            title="Respuesta"
            width="w-medium"
            placement="center"
            onOutsideClick={() => {
                setState({ ...state, open: false, status: false, id: 0 })
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
                        <div className="w-full bg-purple-200 rounded-xl border items-center border-stroke-primary p-6 flex flex-col gap-4">
                            <Text size="h2" weight="font-bold" variant="title">Ingrese la respuesta</Text>
                            <Input
                                register={register}
                                error={errors}
                                type="text"
                                name="set"
                                leftIcon={false}
                                placeholder="Respuesta"
                            />
                        </div>
                        <div className="w-full flex justify-end mt-4">
                            <Button size="btn1" variant="primary" type="button" padding="px-6 py-4">
                                Confirmar
                            </Button>
                        </div>
                    </>
            }
        </Modal>
    );
}

export default ModalComunicacion;