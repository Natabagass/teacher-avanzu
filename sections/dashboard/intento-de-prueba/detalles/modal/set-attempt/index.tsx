'use client'

import Button from "@components/button";
import Input from "@components/input";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

const ModalSetAttempts = ({
    open,
    setOpen
}: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    const { register, formState: {errors} } = useForm()
    return (
        <Modal
            open={open}
            onClick={() => { }}
            color="bg-purple-100"
            title="Establecer intentos"
            width="w-medium"
            onOutsideClick={() => setOpen(false) }
            placement="center"
        >
            <div className="w-full bg-purple-200 rounded-xl border items-center border-stroke-primary p-6 flex flex-col gap-4">
                <Text size="h2" weight="font-bold" variant="title">Cuantos intentos</Text>
                <Text weight="font-normal" size="p2" variant="subTitle" color="text-content-secondary">Establecer cuántos intentos</Text>
                <Input
                    register={register}
                    error={errors}
                    type="number"
                    name="set"
                    leftIcon={false}
                    placeholder="Establecer los intentos"
                />
            </div>
            <div className="w-full flex justify-end mt-4">
                <Button size="btn1" variant="primary" type="button" padding="px-6 py-4">
                    Confirmar
                </Button>
            </div>
        </Modal>
    );
}

export default ModalSetAttempts;