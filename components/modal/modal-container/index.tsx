'use client'

import { SetStateAction, useEffect, useState } from "react";
import Modal from "../modal-main";
import { Case, Switch } from "@hooks/conditional-render/switch";
import Text from "@components/text";
import Button from "@components/button";
import { RxCrossCircled } from "react-icons/rx";
import { TbLoader2 } from "react-icons/tb";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Modal = {
    title?: string;
    subTitle?: string;
    href?: string;
    back?: string;
    placement?: 'center' | 'absolute' | '';
    outsideClick?: () => void,
    function?: () => void,
    type: 'success' | 'fail' | 'pending' | 'info' | 'success-notif' | 'balance' | 'loading' | 'save' | 'function' | '';
    data?: any
    variant?: string,
    button1?: string,
    button2?: string,
    desc?: string
};

const ModalContainer = ({
    modal,
}: {
    modal: Modal
}) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (modal.type !== '') {
            setOpen(true)
        }
    }, [modal.type])

    return (
        <div>
            <Modal
                open={open}
                title={
                    modal.type === 'success' ?
                        'Éxito'
                        : modal.title
                }
                width={modal.type === 'loading' ? 'w-[200px]' : 'w-medium'}
                placement={modal.placement}
                color="bg-purple-200"
                onClick={() => { }}
            >
                <Switch>
                    <Case condition={modal.type === 'success'}>
                        <div className="flex flex-col items-center text-center w-full gap-4">
                            <IoCheckmarkDoneOutline className="text-neon-green-500 text-9xl" />
                            <Text color="text-white" weight="font-semibold" size="h3">{modal.subTitle}</Text>
                            <Text color="text-content-secondary" weight="font-normal" size="p2">{modal.desc}</Text>
                            <Button size="btn1" className="w-full" variant="secondary-subtle" padding="py-4 px-2" type="button"
                                onClick={() => {
                                    if (typeof modal?.function === 'function') {
                                        modal?.function()
                                        setOpen(false)
                                    } else {
                                        setOpen(false)
                                    }
                                }}>
                                {modal.button1}
                            </Button>
                        </div>
                    </Case>
                    <Case condition={modal.type === 'loading'}>
                        <div className="flex flex-col items-center w-full gap-2">
                            <TbLoader2 className="text-purple-blue-500 text-9xl animate-spin" />
                            <Text color="text-white" weight="font-semibold" size="h3">Por favor, espere...</Text>
                            <Text color="text-content-secondary" weight="font-normal" size="p2">Estamos procesando su pago</Text>
                        </div>
                    </Case>
                    <Case condition={modal.type === 'function'}>
                        <div className="w-full">
                            <Text weight="font-normal" size="p2" variant="subTitle" color="text-content-secondary">{modal.subTitle}</Text>
                            <div className="flex flex-row w-full gap-2 mt-4">
                                <Button size="btn1" className="w-full" variant="secondary-subtle" padding="py-4 px-2" type="button" onClick={() => setOpen(false)}>Cancelar</Button>
                                <Button size="btn1" className="w-full" variant="primary" type="button" padding="py-4 px-2"
                                    onClick={() => {
                                        if (typeof modal?.function === 'function') {
                                            modal?.function()
                                            setOpen(false)
                                        } else {
                                            setOpen(false)
                                        }
                                    }}
                                >
                                    {modal.button2}
                                </Button>
                            </div>
                        </div>
                    </Case>
                    <Case condition={modal.type === 'fail'}>
                        <div className="flex flex-col items-center w-full gap-6">
                            <RxCrossCircled className="text-red-300 bold text-9xl" />
                            <Text color="text-white" weight="font-medium" className="text-center" size="p1">{modal.data ? modal.data : modal.desc}</Text>
                            <div className="flex flex-row w-full gap-2">
                                <Button size="btn1" className="w-full" variant="primary" type="button" padding="py-4 px-2" onClick={() => {
                                    setOpen(false)
                                    modal.type = ''
                                }}>atrás</Button>
                            </div>
                        </div>
                    </Case>
                </Switch>
            </Modal>
        </div>
    );
}

export default ModalContainer;