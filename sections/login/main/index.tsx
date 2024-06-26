"use client"

import Button from "@components/button";
import ImageBlur from "@components/dynamic-blur";
import Input from "@components/input";
import Text from "@components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@hooks/modal-global";
import Layout from "@layout/main-layout";
import { loginSchema, LoginSchema } from "data/schema/login";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLoaderCircle } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

const LoginPage = () => {
    const [show, setShow] = useState<boolean>(false)
    const [check, setCheck] = useState<boolean>(false)
    const { status } = useSession()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const { setModal } = useModal()
    const {
        register,
        handleSubmit,
        formState: { isValid, errors, isLoading },
        watch
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        defaultValues: {
            rememberMe: false
        }
    })

    const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
        setLoading(true)
        await signIn('login-manual', {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            redirect: false,
            callbackUrl: '/'
        }).then(res => {
            if (res?.ok) {
                router.push('/dashboard/hogar')
            }

            setLoading(false)
            if (typeof res?.error === 'string') {
                const errorParse = JSON.parse(res?.error)

                if (errorParse.password === undefined || errorParse.email === undefined) {
                    setModal({
                        title: "Error de inicio de sesion",
                        placement: "center",
                        type: "fail",
                        data: errorParse.message
                    })
                }
            }
        })
    };

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/dashboard/hogar')
        }
    }, [router, status])

    return (
        <>
            <div className="flex flex-row w-full">
                <div className="w-full gradient-background-light-purple min-h-screen">
                    <div className="flex flex-col h-full w-full justify-between">
                        <div className="flex flex-col pt-6 pl-10 w-[85%]">
                            <Link href={'/'} className="relative mb-4 w-full h-full">
                                <ImageBlur width={130} height={100} className="object-contain object-center" src={'/assets/avanzu.png'} alt="Logo - (Avanzu)" />
                            </Link>
                            <Text size="h1" weight="font-semibold">¡Empieza a aprender con nosotros hoy mismo!</Text>
                            <Text size="p2" weight="font-normal">Descubra un mundo de conocimientos con nuestra variada selección de cursos</Text>
                        </div>
                        <div className="relative w-full h-full">
                            <ImageBlur src={'/assets/landing/login-illus.png'} alt="Illus Login - (Avanzu)" className="object-cover object-left" fill />
                        </div>
                    </div>
                </div>
                <Layout className="w-full justify-center flex-col items-center flex">
                    <Text variant="subTitle-sub" size="h3" weight="font-semibold" color="text-white">¡Hola, bienvenido de nuevo!</Text>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] items-start text-left mt-8">
                        <Input
                            leftIcon={true}
                            register={register}
                            type="text"
                            error={errors}
                            name="email"
                            icon={<LuUser className="text-content-secondary text-xl" />}
                            label="Nombre de usuario o correo electrónico"
                        />
                        <Input
                            variant="password"
                            name="password"
                            error={errors}
                            register={register}
                            labelStyle="mt-4"
                            leftIcon={true}
                            show={show}
                            icon={<CiLock className="text-content-secondary text-xl" />}
                            setShow={setShow}
                            label="Contraseña"
                        />

                        <div className="flex mt-6 flex-row w-full justify-between">
                            <div className="flex flex-row gap-2 items-center">
                                <input
                                    type="checkbox"
                                    onClick={() => setCheck(!check)}
                                    {...register('rememberMe')}
                                    id="checklist"
                                    value={'true'}
                                    className="check-agree cursor-pointer"
                                />
                                <Text variant="label" htmlFor="checklist" className="cursor-pointer" color="text-content-secondary" weight="font-normal" size="p3">Mantenerme conectado</Text>
                            </div>
                            {/* <Link href={'/forgot-password'} className="cursor-pointer">
                                <Text variant="subTitle" weight="font-semibold" size="p2" color="text-white">¿Contraseña olvidada?</Text>
                            </Link> */}
                        </div>

                        <Button
                            disable={ !isValid || loading }
                            type="submit"
                            variant="primary"
                            className="w-full mt-8"
                            onClick={() => { }}
                        >
                            {
                                loading ?
                                    <div className="flex flex-row w-full justify-center items-center gap-2">
                                        <Text weight="font-medium" color="text-stroke-primary" size="p2">Cargando</Text>
                                        <BiLoaderCircle className="animate-spin text-stroke-primary text-lg" />
                                    </div>
                                    :
                                    'INICIAR SESIÓN'
                            }
                        </Button>

                        {/* <div className="w-full flex gap-4 flex-col">
                            <Button
                                type="button"
                                variant="secondary"
                                className="w-full flex flex-row gap-3 items-center justify-center"
                                onClick={() => { }}
                            >
                                <ImageBlur src={'/assets/icon/google.svg'} alt="Google Icon - (Avanzu)" width={18} height={18} />
                                Continue with Google
                            </Button>

                            <Button
                                type="button"
                                variant="secondary"
                                className="w-full flex flex-row gap-3 items-center justify-center"
                                onClick={() => { }}
                            >
                                <ImageBlur src={'/assets/icon/facebookColor.svg'} alt="Facebook Icon - (Avanzu)" width={18} height={18} />
                                Continue with Facebook
                            </Button>
                        </div>

                        <Text size="p2" weight="font-medium" className="text-center mt-4" color="text-content-secondary">¿No tienes una cuenta? &nbsp;
                            <Link href="/signup" className="text-white">Regístrate ahora</Link>
                        </Text> */}
                    </form>

                </Layout>
            </div>
        </>
    );
}

export default LoginPage;