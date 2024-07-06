'use client'

import Button from "@components/button";
import ImageBlur from "@components/dynamic-blur";
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

const HeaderHogar = ({ total }: { total: { cursos: number, loadingCursos: boolean, loadingStudent: boolean, student: number } }) => { 

    const dataOverview = [
        {
            id: 1,
            name: 'Mis ingresos totales',
            total: '1000000',
            path: '',
            loading: false,
            rating: '',
            icon: TbUsersGroup
        },
        {
            id: 2,
            name: 'Mi curso',
            path: 'mi-curso',
            loading: total.loadingCursos,
            total: `${total.cursos}`,
            rating: '',
            icon: TbBooks
        },
        {
            id: 3,
            name: 'Mi estudiante',
            path: 'mi-estudiante',
            loading: total.loadingStudent,
            total: `${total.student}`,
            rating: '',
            icon: TbUsersGroup
        },
        {
            id: 4,
            name: 'Valoraciones medias',
            path: '',
            loading: false,
            rating: '4.8',
            total: '127',
            icon: TbStars
        }
    ]

    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            <div className="relative flex flex-row w-full  justify-between items-center bg-neon-green-500 rounded-xl">
                <div className="w-full h-[105px]">
                    <ImageBlur alt="Background - (Avanzu)" src={'/assets/dashboard/background-help.png'} className="object-cover object-center" fill />
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
                                {item.loading ? (
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
