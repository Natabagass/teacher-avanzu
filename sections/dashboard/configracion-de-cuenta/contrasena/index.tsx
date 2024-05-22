'use client'

import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckPassword from "@utils/check-password";
import { PasswordChangeSchema, passwordChangeSchema } from "data/schema/profile/contrasena";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderCircle } from "react-icons/bi";
import { CiLock } from "react-icons/ci";

const ContrasenaPage = () => {
    const { register, formState: { errors, isSubmitting }, handleSubmit, watch, setError, control } = useForm<PasswordChangeSchema>({
        resolver: zodResolver(passwordChangeSchema),
        mode: 'onChange'
    })
    const [pwd, setPwd] = useState(false)
    const [crPwd, setCrPwd] = useState(false)
    const [pwdConfirm, setPwdConfirm] = useState(false)
    return (
        <>
            <form  className="flex w-full mt-8 gap-4 flex-col">
                <Input
                    leftIcon={false}
                    register={register}
                    error={errors}
                    variant="password"
                    setShow={setCrPwd}
                    show={crPwd}
                    name="currentPassword"
                    label="Contraseña actual"
                />

                <div className="flex flex-row w-full gap-3">
                    <div className="w-full flex flex-col">
                        <Input
                            register={register}
                            error={errors}
                            variant="password"
                            name="password"
                            labelStyle="mt-4"
                            leftIcon={true}
                            show={pwd}
                            icon={<CiLock className="text-content-secondary text-xl" />}
                            setShow={setPwd}
                            label="Nueva contraseña"
                        />
                        {
                            !errors.password && watch('password') !== undefined && watch('password') !== "" &&
                            <CheckPassword password={watch('password')} />
                        }
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Input
                            register={register}
                            error={errors}
                            variant="password"
                            name="passwordConfirmation"
                            labelStyle="mt-4"
                            leftIcon={true}
                            show={pwdConfirm}
                            icon={<CiLock className="text-content-secondary text-xl" />}
                            setShow={setPwdConfirm}
                            label="Vuelva a escribir la nueva contraseña"
                        />
                        {
                            watch('passwordConfirmation') !== "" && watch('passwordConfirmation') !== undefined ?
                                (watch('password') === watch('passwordConfirmation')) ?
                                    <Text weight="font-medium" size="p3" className="mt-1" color="text-green-200">
                                        Coincidencia de contraseña
                                    </Text>
                                    :
                                    <Text weight="font-medium" size="p3" className="mt-1" color="text-red-300">
                                        La contraseña no coincide
                                    </Text>
                                :
                                null
                        }
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
                                'Confirmar'
                        }
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ContrasenaPage;