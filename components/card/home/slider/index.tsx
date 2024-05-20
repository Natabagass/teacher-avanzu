'use client'

import Text from "@components/text";
import Image from "next/image";
import { LuClock } from "react-icons/lu";
import { TbBooks, TbStar } from "react-icons/tb";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderCourseDetail = () => {
    return (
        <div className="flex flex-row w-full">
            <Swiper
                modules={[Pagination]}
                breakpoints={{
                    1275: {
                        slidesPerView: 3.2,
                        spaceBetween: 20
                    },
                    952: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    716: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    500: {
                        slidesPerView: 2.5,
                        spaceBetween: 5
                    },
                    300: {
                        slidesPerView: 1.5,
                        spaceBetween: 5
                    }
                }}
                className="swiper-hover mt-4"
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id} className="border text-left w-full border-stroke-primary rounded-xl p-2">
                            <div className="flex flex-col gap-3 items-start">
                                <div className="relative w-full h-[180px]">
                                    <Image src={item.img} alt="Course Image - (Avanzu)" fill className="object-cover object-center rounded-lg" />
                                </div>
                                <Text variant="title" size="p1" weight="font-semibold">{item.title}</Text>
                                <div className="flex gap-2 items-center flex-row">
                                    <div className="flex flex-row gap-1">
                                        <TbStar className="text-content-secondary text-base" />
                                        <Text weight="font-medium" size="cpt1" color="text-content-secondary">{item.rating}</Text>
                                        <Text weight="font-medium" size="cpt1" color="text-content-secondary">({item.total})</Text>
                                    </div>
                                    <span className="text-content-secondary">
                                        &#x2022;
                                    </span>
                                    <div className="flex w-full flex-row items-center gap-2">
                                        <div className="relative h-4 w-4">
                                            <Image src={item.author.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                        </div>
                                        <Text size="cpt1" weight="font-medium" color="text-white">{item.author.name}</Text>
                                    </div>
                                </div>
                                <div className="h-border bg-stroke-primary w-full" />
                                <div className={`flex items-center flex-row w-full gap-1`}>
                                    <LuClock className="text-white text-sm" />
                                    <Text size="p3" weight="font-medium" color="text-white">{item?.time} Horas</Text>
                                    <span className="text-content-secondary">
                                        &#x2022;
                                    </span>
                                    <TbBooks className="text-white text-sm" />
                                    <Text size="p3" weight="font-medium" color="text-white">{item?.course} lección</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default SliderCourseDetail;

export const data = [
    {
        id: 1,
        img: '/assets/cursos/course-img.png',
        title: 'Consumer rights in Colombia',
        rating: '4.8',
        total: 123,
        author: {
            name: 'Universidad san jose',
            img: '/assets/cursos/person-2.png'
        },
        time: 80,
        course: 37
    },
    {
        id: 2,
        img: '/assets/cursos/course-img.png',
        title: 'Consumer rights in Colombia',
        rating: '4.8',
        total: 123,
        author: {
            name: 'Universidad san jose',
            img: '/assets/cursos/person-2.png'
        },
        time: 80,
        course: 37
    },
    {
        id: 3,
        img: '/assets/cursos/course-img.png',
        title: 'Consumer rights in Colombia',
        rating: '4.8',
        total: 123,
        author: {
            name: 'Universidad san jose',
            img: '/assets/cursos/person-2.png'
        },
        time: 80,
        course: 37
    },
    {
        id: 4,
        img: '/assets/cursos/course-img.png',
        title: 'Consumer rights in Colombia',
        rating: '4.8',
        total: 123,
        author: {
            name: 'Universidad san jose',
            img: '/assets/cursos/person-2.png'
        },
        time: 80,
        course: 37
    },
    {
        id: 5,
        img: '/assets/cursos/course-img.png',
        title: 'Consumer rights in Colombia',
        rating: '4.8',
        total: 123,
        author: {
            name: 'Universidad san jose',
            img: '/assets/cursos/person-2.png'
        },
        time: 80,
        course: 37
    },
    {
        id: 6,
        img: '/assets/cursos/course-img.png',
        title: 'Consumer rights in Colombia',
        rating: '4.8',
        total: 123,
        author: {
            name: 'Universidad san jose',
            img: '/assets/cursos/person-2.png'
        },
        time: 80,
        course: 37
    },
]