'use client'

import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TbChevronLeft, TbChevronRight, TbSearch } from "react-icons/tb";
import ReactPaginate from "react-paginate";
import ModalComunicacion from "./modal";
import ImageBlur from "@components/dynamic-blur";

const ComunicacionPage = () => {
    const [state, setState] = useState({
        page: 1,
        open: false,
        id: 0,
        status: false,
        answer: ''
    })
    const { register, formState: { errors }, control } = useForm()
    const itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const answer = data.filter(item => item.status === true).map((sub) => sub)
    const notAnswer = data.filter(item => item.status === false).map((sub) => sub)
    const currentItems = state.page === 1
        ? notAnswer.slice(itemOffset, endOffset)
        : answer.slice(itemOffset, endOffset)
    const pageCount = Math.ceil((state.page === 1 ? notAnswer.length : answer.length) / itemsPerPage);
    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = (selected * itemsPerPage) % (state.page === 1 ? notAnswer.length : answer.length);
        setItemOffset(newOffset);
    };


    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            <Text size="h3" weight="font-semibold" variant="title">Comunicación</Text>

            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-row gap-3">
                    {
                        menu.map((item) => (
                            <div key={item.id} className="flex justify-start w-full">
                                <Button padding="px-6 py-4" onClick={() => setState({...state, page: item.id})} type="button" size="btn1" variant={item.id === state.page ? 'primary' : 'secondary-subtle'}>
                                    {item.name}
                                </Button>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-end">
                    <Input
                        name="Buscar"
                        color="bg-purple-100"
                        leftIcon={true}
                        icon={<TbSearch className="text-content-secondary text-xl" />}
                        placeholder="Buscar"
                        register={register}
                        error={errors}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full gap-8">
                {
                    currentItems.map((item) => (
                        <div key={item.id} className="border border-stroke-primary rounded-2xl p-2 flex flex-row w-full gap-3">
                            <div className="relative min-h-[150px] w-[30%]">
                                <ImageBlur src={item.course.img} alt="Course - (Avanzu)" fill className="object-cover rounded-xl object-center" />
                            </div>
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex flex-row w-full items-center justify-between">
                                    <Text size="h3" weight="font-semibold" variant="title">{item.course.title}</Text>
                                    <div className={` ${item.status ? 'border-green-200' : 'border-orange-200'} border rounded-2xl p-2`}>
                                        <Text size="cpt1" weight="font-medium" color={item.status ? 'text-green-200' : 'text-orange-200'}>{item.status ? 'Contestada' : 'No leído'}</Text>
                                    </div>
                                </div>
                                <div className="p-4 bg-purple-100 rounded-xl flex flex-col gap-4">
                                    <div className="w-full items-center flex flex-row gap-2">
                                        <div className="relative w-8 h-8">
                                            <ImageBlur src={item.ask.img} alt="Profile - (Avanzu)" fill className="object-cover rounded-full object-center" />
                                        </div>
                                        <Text size="p2" weight="font-medium" variant="subTitle">{item.ask.name}</Text>
                                        <span className="text-content-secondary">
                                            &#x2022;
                                        </span>
                                        <Text size="p2" weight="font-normal" color="text-content-secondary">{item.ask.date}</Text>
                                    </div>
                                    <div className="flex flex-row w-full justify-between">
                                        <Text size="p2" weight="font-normal">{item.ask.text}</Text>
                                        <Button 
                                        onClick={() => {
                                            setState({...state, id: item.id, open: true, status: item.status, answer: item.answer})
                                        }} 
                                        variant="clear" className="text-white" type="button" size="btn2">
                                            {
                                                item.status ?
                                                    <>
                                                        <span className="text-content-secondary">Entor lo ha respondido,</span>
                                                        Ver respuesta
                                                    </>
                                                    : 'Ver pregunta'
                                            }
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <ReactPaginate
                    className="flex flex-row w-full justify-center gap-4 items-center"
                    breakLabel="..."
                    breakClassName="page-item text-white rounded-full bg-purple-300 p-2"
                    nextLabel={<TbChevronRight className='w-11 h-11 ml-8 p-3 text-white rounded-full hover:bg-neon-green-main hover:text-base-dark bg-purple-300' />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    previousLabel={<TbChevronLeft className='w-11 h-11 mr-8 flex p-3 text-white rounded-full hover:bg-neon-green-main hover:text-base-dark bg-purple-300' />}
                    renderOnZeroPageCount={() => null}
                    pageCount={pageCount}
                    containerClassName={"pagination-item"}
                    pageClassName={"page-item text-white bg-purple-300 p-4 rounded-full font-medium"}
                    activeClassName={"active"}
                />
            </div>
            {
                state.open &&
                <ModalComunicacion
                    state={state}
                    setState={setState}
                />
            }
        </Layout>
    );
}

export default ComunicacionPage;

const menu = [
    {
        id: 1,
        name: 'No leído'
    },
    {
        id: 2,
        name: 'Leído'
    }
]

const data = [
    {
        id: 1,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'React Desde Cero'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '15 Feb',
            text: '¿Sabes sobre esto?'
        }
    },
    {
        id: 2,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Node.js para Principiantes'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '20 Feb',
            text: '¿Cómo funciona esto?'
        }
    },
    {
        id: 3,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Vue.js Avanzado'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '25 Feb',
            text: '¿Tienes alguna idea sobre esto?'
        }
    },
    {
        id: 4,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Angular Desde Cero'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '1 Mar',
            text: '¿Qué piensas sobre esto?'
        }
    },
    {
        id: 5,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Svelte para Principiantes'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '5 Mar',
            text: '¿Puedes ayudarme con esto?'
        }
    },
    {
        id: 6,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'JavaScript Avanzado'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '10 Mar',
            text: '¿Qué opinas de esto?'
        }
    },
    {
        id: 7,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Python para Todos'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '15 Mar',
            text: '¿Sabes cómo hacer esto?'
        }
    },
    {
        id: 8,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Django para Principiantes'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '20 Mar',
            text: '¿Tienes experiencia con esto?'
        }
    },
    {
        id: 9,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Flask Avanzado'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '25 Mar',
            text: '¿Puedes explicarme esto?'
        }
    },
    {
        id: 10,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Ruby on Rails para Todos'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '30 Mar',
            text: '¿Qué sabes sobre esto?'
        }
    },
    {
        id: 11,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'PHP Desde Cero'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '5 Apr',
            text: '¿Cómo se hace esto?'
        }
    },
    {
        id: 12,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Laravel para Principiantes'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '10 Apr',
            text: '¿Puedes darme más información sobre esto?'
        }
    },
    {
        id: 13,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Spring Boot Avanzado'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '15 Apr',
            text: '¿Tienes algún consejo sobre esto?'
        }
    },
    {
        id: 14,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Kotlin para Android'
        },
        status: true,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '20 Apr',
            text: '¿Qué sugieres para esto?'
        }
    },
    {
        id: 15,
        course: {
            img: '/assets/cursos/course-img.png',
            title: 'Swift para iOS'
        },
        status: false,
        answer: 'Esta es tu respuesta',
        ask: {
            name: 'Bimasp',
            img: '/assets/cursos/person-2.png',
            date: '25 Apr',
            text: '¿Cómo abordarías esto?'
        }
    }
];
