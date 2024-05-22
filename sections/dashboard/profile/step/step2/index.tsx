'use client'

import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@hooks/modal-global";
import CheckPassword from "@utils/check-password";
import { passwordChangeSchema, PasswordChangeSchema } from "data/schema/profile/contrasena";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLoaderCircle } from "react-icons/bi";
import { CiLock } from "react-icons/ci";

const ConfiguracionPercidad = () => {

    const { register, formState: { errors, isSubmitting }, handleSubmit, watch, setError, control } = useForm<PasswordChangeSchema>({
        resolver: zodResolver(passwordChangeSchema),
        mode: 'onChange'
    })

    const logout = async () => {
        await signOut({
            redirect: true,
            callbackUrl: '/login'
        })
    }

    const { setModal } = useModal()

    const onSubmit: SubmitHandler<PasswordChangeSchema> = async (data) => {
        try {
            const res = await fetch(`/api/users`, {
                method: 'PATCH',
                body: JSON.stringify(data)
            });
            const datas = await res.json()
            if (datas.code === 200) {
                setModal({
                    placement: 'center',
                    type: 'success',
                    button1: 'Mostrar Menos',
                    function: () => {
                        logout()
                    },
                    subTitle: 'actualizar el éxito de las redes sociales',
                })
            }
            setError('root', datas.errors)
        } catch (error: any) {
            setError('root', error.response.data.errors)
        }
    };

    const [pwd, setPwd] = useState(false)
    const [crPwd, setCrPwd] = useState(false)
    const [pwdConfirm, setPwdConfirm] = useState(false)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-full mt-8 gap-4 flex-col">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-row items-center w-full gap-3">
                        <input
                            type="checkbox"
                            id={'show-profile'}
                            name={'show-profile'}
                            className="check-cart"
                            value={'show-profile'}
                        // checked={checkedItems[item.name] || false}
                        // onChange={() => handleCheckboxChange(item.name)}
                        />
                        <label htmlFor={'show-profile'}>
                            <Text weight="font-medium" size="p2">Muestra tu perfil a los usuarios conectados.</Text>
                        </label>
                    </div>
                    <div className="flex flex-row items-center w-full gap-3">
                        <input
                            type="checkbox"
                            id={'course-taking'}
                            name={'course-taking'}
                            className="check-cart"
                            value={'course-taking'}
                        // checked={checkedItems[item.name] || false}
                        // onChange={() => handleCheckboxChange(item.name)}
                        />
                        <label htmlFor={'course-taking'}>
                            <Text weight="font-medium" size="p2">Muestra los cursos que estás tomando en tu página de perfil</Text>
                        </label>
                    </div>
                </div>

                <div className="w-full flex justify-end">
                    <Button
                        type="submit"
                        variant="primary"
                        disable={isSubmitting}
                        size="btn2"
                        padding="px-3 py-4"
                    >
                        {
                            isSubmitting ?
                                <div className="flex flex-row w-full justify-center items-center gap-2">
                                    <Text weight="font-medium" color="text-stroke-primary" size="p2">Cargando</Text>
                                    <BiLoaderCircle className="animate-spin text-stroke-primary text-lg" />
                                </div>
                                :
                                'Actualizar el perfil'
                        }
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ConfiguracionPercidad;