'use client'

import Button from "@components/button";
import BackButton from "@components/button/back";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import Image from "next/image";
import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { TbBook, TbChecklist, TbDownload, TbNotebook } from "react-icons/tb";
import SliderCourseDetail from "@components/slider/course-detail";
import ImageBlur from "@components/dynamic-blur";

const PerfilPublicoPage = () => {
    const [open, setOpen] = useState(false)
    const [openSetInstructor, setOpenSetInstructor] = useState(false)
    const [suspend, setSuspend] = useState(false)

    return (
        <div className="flex flex-col w-full gap-8">
            <BackButton />

            <div className="w-full relative min-h-[300px]">
                <ImageBlur src={'/assets/profile/bg.png'} fill alt="Profile Background - (Avanzu)" className="object-cover rounded-2xl object-center z-1" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-dark/50 to-base-dark/70 z-0"></div>
                <div className="flex absolute flex-col justify-center w-full h-full px-6 py-8 items-start z-2">
                    <div className="rounded-full border-4 border-white w-36 h-36 relative">
                        <ImageBlur src={'/assets/cursos/person-2.png'} alt="Profile - (Avanzu)" fill className="object-cover rounded-full object-center" />
                    </div>
                    <div className="mt-4">
                        <Text size="h3" weight="font-semibold" variant="title">
                            Bima Misopodso
                        </Text>
                        <Text size="p3" weight="font-medium" variant="subTitle" color="text-content-secondary">
                            @bimasokto
                        </Text>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 w-full gap-4">
                {
                    dataCard.map((item) => (
                        <div key={item.id} className={`${item.id === 1 && 'gradient-background-purple'} border border-stroke-primary flex flex-row items-center gap-4 w-full p-4 rounded-2xl`}>
                            <div className={`${item.id === 1 && 'bg-purple-200'} rounded-full p-4 bg-purple-100 border border-stroke-primary`}>
                                <item.icon className="text-white text-2xl" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <Text size="p2" color="text-content-secondary" weight="font-normal">{item.name}</Text>
                                <Text size="h3" weight="font-bold">{item.total}</Text>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col w-full gap-3">
                <Text size="p1" weight="font-semibold" variant="subTitle-sub">Biografía</Text>
                <Text size="p2" variant="paragraph" weight="font-normal" color="text-content-secondary">Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Course aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</Text>
            </div>
            <div className="flex flex-col w-full gap-2">
                <Text size="h3" weight="font-semibold" variant="subTitle-sub">Cursos destacados</Text>
                <SliderCourseDetail />
            </div>
            <div className="flex flex-col w-full gap-2">
                <Text size="h3" weight="font-semibold" variant="subTitle-sub">Cursos</Text>
                <SliderCourseDetail />
            </div>
        </div>
    );
}

export default PerfilPublicoPage;

export const dataCard = [
    {
        id: 1,
        name: 'Cursos inscritos',
        total: '300',
        icon: TbBook
    },
    {
        id: 2,
        name: 'Cursos activos',
        total: '120',
        icon: TbNotebook
    },
    {
        id: 3,
        name: 'Cursos completados',
        total: '100',
        icon: TbChecklist
    }
]

export const dataCursos = [
    {
        name: 'React desde cero',
        img: '/assets/cursos/course-1.svg',
        time: '123 minutes',
        author: {
            name: 'El Convenio con Universidad San Jose',
            img: '/assets/cursos/person-2.png'
        },
        desc: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo',
        rating: '4.8',
        person: 123,
        completion: {
            item: '24 de 37 lección',
            percent: 50
        }
    },
    {
        name: 'React desde cero',
        img: '/assets/cursos/course-1.svg',
        time: '123 minutes',
        author: {
            name: 'El Convenio con Universidad San Jose',
            img: '/assets/cursos/person-2.png'
        },
        desc: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo',
        rating: '4.8',
        person: 123,
        completion: {
            item: '24 de 37 lección',
            percent: 40
        }
    },
    {
        name: 'React desde cero',
        img: '/assets/cursos/course-1.svg',
        time: '123 minutes',
        author: {
            name: 'El Convenio con Universidad San Jose',
            img: '/assets/cursos/person-2.png'
        },
        desc: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo',
        rating: '4.8',
        person: 123,
        completion: {
            item: '24 de 37 lección',
            percent: 65
        }
    },
    {
        name: 'React desde cero',
        img: '/assets/cursos/course-1.svg',
        time: '123 minutes',
        author: {
            name: 'El Convenio con Universidad San Jose',
            img: '/assets/cursos/person-2.png'
        },
        desc: 'Sumérgete en un entorno de aprendizaje enfocado y visualmente impresionante. Nuestro diseño de estética oscura añade un toque de elegancia, fomentando una atmósfera propicia para una concentración profunda y una inmersión mejorada en su viaje educativo',
        rating: '4.8',
        person: 123,
        completion: {
            item: '24 de 37 lección',
            percent: 85
        }
    },
]