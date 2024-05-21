'use client'

import Text from "@components/text";
import { useState } from "react";
import { LuMoreVertical, LuUser } from "react-icons/lu";

const CardSuscripcion = ({
    data
}: {
    data: {
        expired: string,
        type: string
    }
}) => {
    const [open, setOpen] = useState(false)
    const [openReembolso, setOpenReembolso] = useState<boolean>(false)
    const [show, setShow] = useState(false)

    return (
        <div className="flex flex-row w-full justify-between items-center border bg-purple-100 border-white/20 rounded-xl p-2">
            <div className="flex flex-row w-full gap-4">
                <div className="border-white rounded-full border p-4">
                    <LuUser className="text-2xl text-white" />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <Text weight="font-semibold" size="p1">{data.type}</Text>
                    <Text weight="font-normal" size="p2" color="text-content-secondary">Su suscripción finalizará hasta <span className="text-white font-medium">{data.expired}</span></Text>
                </div>
            </div>
            <div>
                <button onClick={() => setOpen(!open)}>
                    <LuMoreVertical className="text-white text-3xl" />
                </button>
                {/* <div className="absolute p-2 z-50 right-14">
                    {
                        open &&
                        <ModalMoreSuscripcion
                            openReembolso={openReembolso}
                            setOpenReembolso={setOpenReembolso}
                            show={show}
                            setShow={setShow}
                        />
                    }
                </div> */}
            </div>
        </div>
    );
}

export default CardSuscripcion;

