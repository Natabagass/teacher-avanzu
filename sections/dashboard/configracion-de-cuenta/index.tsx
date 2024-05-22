'use client'

import BackButton from "@components/button/back";
import Text from "@components/text";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ContrasenaPage from "./contrasena";
import NotificacionPage from "./notificacion";
import CerrarPage from "./cerrar";

const ConfiguracionDeCuentaPage = () => {
    const [page, setPage] = useState(1)
    const { register, formState: { errors } } = useForm()
    return (
        <div className="w-full flex justify-center">
            <div className="flex w-[75%] gap-8 justify-center flex-col items-start">
                <BackButton />

                <Text size="h3" weight="font-semibold" variant="title">Configuración de cuenta</Text>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full gap-4">
                        {
                            menu.map((item) => (
                                <div onClick={() => setPage(item.id)} key={item.id} className="flex cursor-pointer flex-col items-center w-[20%] gap-3">
                                    <Text size="p3" weight="font-medium" color={page === item.id ? 'text-purple-blue-500' : 'text-content-secondary'}>{item.name}</Text>
                                    <div className={`w-full h-border ${page === item.id ? 'bg-purple-blue-500 relative z-20' : 'bg-content-secondary'}`} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="h-border bg-content-tertiary -mt-[1px] w-full z-0 relative" />
                </div>

                <div className="w-full">
                    {
                        page === 1
                            ? <ContrasenaPage />
                            : page === 2
                                ? <NotificacionPage />
                                : <CerrarPage />
                    }
                </div>
            </div>
        </div>
    );
}

export default ConfiguracionDeCuentaPage;

export const menu = [
    {
        id: 1,
        name: 'Contraseña'
    },
    {
        id: 2,
        name: 'Notificación de configuración'
    },
    {
        id: 3,
        name: 'Cerrar cuenta'
    }
]