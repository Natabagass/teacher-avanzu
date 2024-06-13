'use client'

import Button from "@components/button";
import Links from "@components/link";
import LoadingPage from "@components/loading";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import { dollarFormatter } from "@utils/formatter/dollar-formatter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbBook2, TbBooks, TbCashBanknote, TbDownload, TbSchool, TbStars, TbUsersGroup } from "react-icons/tb";

const HeaderHogar = () => {
    const [total, setTotal] = useState({
        cursos: 0,
        student: 0
    })

    const datas = async () => {
        const resCursos = await fetch('/api/users/self/courses?page=1&per-page=1&as-creator=true', {
            method: 'GET'
        })
        const resStudents = await fetch('/api/users/self/courses/students?page=1&per-page=1', {
            method: 'GET'
        })

        if (resCursos.status === 200 || resStudents.status === 200) {
            const jsonCursos = await resCursos.json()
            const jsonStudents = await resStudents.json()
            setTotal({ ...total, cursos: jsonCursos.metadata.totalCount, student: jsonStudents.metadata.totalCount })
        }
    }

    useEffect(() => {
        datas()
    }, [])


    const dataOverview = [
        {
            id: 1,
            name: 'Mis ingresos totales',
            total: '1000000',
            path: '',
            rating: '',
            icon: TbUsersGroup
        },
        {
            id: 2,
            name: 'Mi curso',
            path: 'mi-curso',
            total: `${total.cursos}`,
            rating: '',
            icon: TbBooks
        },
        {
            id: 3,
            name: 'Mi estudiante',
            path: 'mi-estudiante',
            total: `${total.student}`,
            rating: '',
            icon: TbUsersGroup
        },
        {
            id: 4,
            name: 'Valoraciones medias',
            path: '',
            rating: '4.8',
            total: '127',
            icon: TbStars
        }
    ]

    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            <div className="relative flex flex-row w-full  justify-between items-center bg-neon-green-500 rounded-xl">
                <div className="w-full h-[105px]">
                    <Image alt="Background - (Avanzu)" src={'/assets/dashboard/background-help.png'} className="object-cover object-center" fill />
                </div>
                <div className="absolute inset-0 px-3 py-6 flex flex-row w-full items-center">
                    <div className="flex flex-col w-[90%] gap-1">
                        <Text size="h3" variant="subTitle-sub" color="text-base-dark" weight="font-semibold">Comience ya su viaje por el curso</Text>
                        <Text size="p2" color="text-content-tertiary" variant="paragraph" weight="font-normal">Construya su espacio de aprendizaje ideal</Text>
                    </div>
                    <div className="w-full flex justify-end">
                        <Links href="/dashboard/curso/crear" padding="p-4" variant="white">
                            Crear curso
                        </Links>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 w-full gap-4">
                {
                    dataOverview.map((item) => (
                        <Link href={item.path} key={item.id} className="border border-stroke-primary p-4 rounded-2xl items-start flex flex-col gap-2">
                            <div className="rounded-full border border-stroke-primary p-3 bg-purple-100">
                                <item.icon className="text-xl text-white" />
                            </div>
                            <Text size="p2" color="text-content-secondary" weight="font-medium">{item.name}</Text>
                            <Text size="h3" weight="font-bold">
                                {item.total === '0' ? (
                                    <AiOutlineLoading3Quarters className="text-purple-blue-500 animate-spin text-2xl" />
                                ) : (
                                    item.id === 1 ? dollarFormatter(item.total) : item.total
                                )}
                            </Text>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    );
}

export default HeaderHogar;
