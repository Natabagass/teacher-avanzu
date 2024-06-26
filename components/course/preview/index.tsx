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
import { ReviewsTypes } from "data/types/interface/reviews";
import { DetailCourseTypes } from "data/types/interface/course/detail";
import { secondtoHours } from "@utils/formatter/hours-formatter";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import ReactPlayer from "react-player";
import ImageBlur from "@components/dynamic-blur";

const CursosPreview = ({
    data,
    review,
    handleClick
}: {
    review: ReviewsTypes,
    handleClick: () => void,
    data: DetailCourseTypes
}) => {
    const [show, setShow] = useState(false)
    const [muted, setMuted] = useState(false)
    const [playing, setPlaying] = useState(false)

    return (
        <div className="w-full relative mb-6 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-dark/90 to-base-dark z-20 pointer-events-none"></div>
            <div className="relative w-full -z-30">
                <ReactPlayer
                    url='https://avanzu.s3.us-east-2.amazonaws.com/Mo%CC%81dulo%201.%201%20Introduccio%CC%81n%20a%20la%20oratoria.mp4'
                    controls={false}
                    playing={playing}
                    muted={muted}
                    width="100%"
                    height="100%"
                    className="top-0 left-0"
                />
                {/* <Image src={data.thumbnail} alt="Image Testi - (Avanzu)" fill className="object-cover rounded-3xl object-center" /> */}
            </div>
            <div className="absolute inset-0 flex flex-col text-left p-3 z-50">
                <div onClick={() => setPlaying(!playing)} className="flex justify-center items-center h-[50%]">
                    {
                        !playing &&
                        <TbPlayerPlay className="text-white text-9xl" />
                    }
                </div>
            </div>
            <div className="z-50 px-8 relative -mt-52">
                <div className="w-[70%] flex flex-col gap-2">
                    <Text size="p2" weight="font-medium">Principiante</Text>
                    <Text size="h1" weight="font-bold">{data.title}</Text>
                    <div className={`flex items-center flex-row w-full gap-1`}>
                        <LuClock className="text-white text-sm" />
                        <Text size="p3" weight="font-medium" color="text-white">{secondtoHours(data.hours)} Horas</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <TbBooks className="text-white text-sm" />
                        <Text size="p3" weight="font-medium" color="text-white">{data.lessonsCount || 0} lección</Text>
                        <span className="text-content-secondary">
                            &#x2022;
                        </span>
                        <IoIosStarOutline className="text-sm text-content-secondary" />
                        <Text size="p3" weight="font-medium" color="text-white">{data.rating || 0}</Text>
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
                        <div onClick={() => setMuted(!muted)} className="rounded-full border border-stroke-primary bg-purple-300 p-3">
                            <ImVolumeMute2 className="text-white text-base" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full mt-10 justify-between">
                    <div className="flex flex-col w-[80%] gap-2">
                        <Text size="p1" weight="font-semibold">Acerca de este curso</Text>
                        <Text weight="font-normal" size="p2" color="text-content-secondary">{show ? data.description : data.description.slice(0, 250)} <button onClick={() => setShow(!show)} className="text-base font-medium text-neon-green-500">{!show ? 'Mostrar más...' : 'Mostrar Menos...'}</button></Text>
                    </div>
                    <div className="flex flex-row gap-2 justify-end items-start">
                        <div className="flex flex-row gap-2 w-full items-center">
                            <div className="relative h-14 w-14">
                                <ImageBlur src={data?.teacherPicture || `${URL_DUMMY_IMAGE}?name=user&size=120`} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                            </div>
                            <Text weight="font-semibold" size="p1">{data.teacher}</Text>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-8">
                    {
                        data?.modules?.length > 1 ?
                            <>
                                <Text size="h3" weight="font-semibold">CONTENIDO DE TEMAS DEL CURSO</Text>
                                <ListCourseModule item={data.modules} />
                            </>
                            :
                            ''
                    }
                </div>
                <div className="flex flex-col w-full mt-8">
                    {
                        review?.records.length > 0 &&
                        <>
                            <Text size="h3" weight="font-semibold">Reseñas ({review.records.length})</Text>
                            <ResenasList item={data} reviews={review} handlePageClick={handleClick} />
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default CursosPreview;