'use client'

import Button from "@components/button";
import Links from "@components/link";
import Text from "@components/text";
import Image from "next/image";
import { ImVolumeMute2 } from "react-icons/im";
import { IoIosStarOutline, IoMdMore } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { TbBooks, TbPlayerPlay } from "react-icons/tb";
import ResenasList from "../resenas-list";
import { Dispatch, SetStateAction, useState } from "react";
import ListCourseModule from "../ListCourseModule";

const CursosPreview = ({
    data,
}: {
    data: {
        img: string,
        desc: string,
        tag: string,
        title: string,
        skills: string,
        rating: string,
        resenas: {
            star: number,
            total: number,
            details: {
                star: number,
                rating: number
            }[],
            list: {
                id: number,
                name: string,
                date: string,
                img: string,
                star: number,
                desc: string,
            }[]
        }
        modul: {
            id: number,
            name: string,
            course: number,
            time: number,
            flag: boolean,
            subModul: {
                title: string,
                time: string,
                id: number,
                flag: boolean,
                type: string
            }[]
        }[]
        author: {
            name: string,
            img: string
        },
        time: string,
        course: string,
        percent: string,
        price: string
    }
}) => {
    const [show, setShow] = useState(false)

    return (
        <div className="w-full relative mb-6 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-dark/90 to-base-dark z-20 pointer-events-none"></div>
            <div className="relative w-full min-h-[650px] -z-30">
                <Image src={data.img} blurDataURL={data.img} placeholder="blur" alt="Image Testi - (Avanzu)" fill className="object-cover object-center" />
            </div>
            <div className="absolute inset-0 flex flex-col text-left p-3 z-50">
                <div className="flex justify-center items-center h-[30%]">
                    <TbPlayerPlay className="text-white text-9xl" />
                </div>
            </div>
            <div className="z-50 px-8 relative -mt-52">
                <div className="w-[70%] flex flex-col gap-2">
                    <Text size="p2" weight="font-medium">Principiante</Text>
                    <Text size="h1" weight="font-bold">{data.title}</Text>
                    <div className={`flex items-center flex-row w-full gap-1`}>
                        <LuClock className="text-white text-sm" />
                        <Text size="p3" weight="font-medium" color="text-white">{data.time} Horas</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <TbBooks className="text-white text-sm" />
                        <Text size="p3" weight="font-medium" color="text-white">{data.course} lección</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <IoIosStarOutline className="text-sm text-content-secondary" />
                        <Text size="p3" weight="font-medium" color="text-white">{data.rating}</Text>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-between mt-4">
                    <div className="flex flex-row w-full items-center gap-2">
                        <div className="rounded-full border border-stroke-primary bg-purple-300 p-3">
                            <IoMdMore className="text-white text-base" />
                        </div>
                        <Button onClick={() => {
                            // setOpenSubscription(true)
                        }} type="button" size="btn1" variant="primary" padding="px-6 py-4">
                            Iniciar Curso
                        </Button>
                    </div>
                    <div className="flex flex-row w-full justify-end gap-2 items-center">
                        <div className="rounded-full border border-stroke-primary bg-purple-300 p-3">
                            <ImVolumeMute2 className="text-white text-base" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full mt-10 justify-between">
                    <div className="flex flex-col w-[80%] gap-2">
                        <Text size="p1" weight="font-semibold">Acerca de este curso</Text>
                        <Text weight="font-normal" size="p2" color="text-content-secondary">{show ? data.desc : data.desc.slice(0, 250)} <button onClick={() => setShow(!show)} className="text-base font-medium text-neon-green-500">{!show ? 'Mostrar más...' : 'Mostrar Menos...'}</button></Text>
                    </div>
                    <div className="flex flex-row gap-2 justify-end items-start">
                        <div className="flex flex-row gap-2 w-full items-center">
                            <div className="relative h-14 w-14">
                                <Image src={data?.author.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                            </div>
                            <Text weight="font-semibold" size="p1">{data.author.name}</Text>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8">
                    <Text size="h3" weight="font-semibold">CONTENIDO DE TEMAS DEL CURSO</Text>
                    <ListCourseModule item={data.modul} />
                </div>
                <div className="flex flex-col w-full mt-8">
                    <Text size="h3" weight="font-semibold">Reseñas (12k)</Text>
                    <ResenasList item={data.resenas} />
                </div>
            </div>
        </div>
    );
}

export default CursosPreview;