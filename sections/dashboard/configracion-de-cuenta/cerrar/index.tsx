'use client'

import Button from "@components/button";
import Text from "@components/text";
import ModalCerrar from "./modal";
import { useState } from "react";

const CerrarPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="flex flex-col w-full gap-8">
                <div className="flex flex-row w-full gap-4">
                    <div className="flex flex-col gap-2">
                        <Text size="p1" weight="font-semibold" variant="title">Seguro que quieres cerrar la cuenta.</Text>
                        <Text size="p2" weight="font-normal" color="text-content-secondary" variant="subTitle" >La eliminación de la cuenta es irreversible y está prevista para dentro de 30 días. Si cambia de opinión, simplemente inicie sesión para cancelar el proceso.</Text>
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <Button
                        onClick={() => setOpen(true)}
                        variant="primary"
                        type="button"
                        size="btn1"
                        padding="px-6 py-4"
                    >
                        Cerrar Cuenta
                    </Button>
                </div>
            </div>
            <ModalCerrar 
                open={open}
                setOpen={setOpen}
            />
        </>
    );
}

export default CerrarPage;