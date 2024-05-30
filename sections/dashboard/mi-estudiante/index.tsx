'use client'

import Button from "@components/button";
import BackButton from "@components/button/back";
import Links from "@components/link";
import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Text from "@components/text";
import Image from "next/image";
import { useState } from "react";
import { TbBooks, TbChevronLeft, TbChevronRight, TbDownload } from "react-icons/tb";
import ReactPaginate from "react-paginate";
import ModalEstudianteSingle from "./modal";

const MiEstudiantePage = () => {
    const itemsPerPage = 4
    const [itemOffset, setItemOffset] = useState(0);
    const [id, setId] = useState(0)
    const [open, setOpen] = useState(false)
    const [openCertif, setCertif] = useState('')
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data ? data.slice(itemOffset, endOffset) : [];
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = (selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="flex w-[75%] justify-center flex-col items-start">
                <BackButton />

                <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex mt-8 flex-row justify-between">
                        <Text size="h3" variant="title" weight="font-semibold">Mis Estudiantes</Text>
                        <div>
                            <Button size="btn1" type="button" padding="px-6 py-4" variant="primary" className="flex flex-row w-full gap-2">
                                <TbDownload />
                                Exportar como informe
                            </Button>
                        </div>
                    </div>
                    <div className="border border-stroke-primary w-full p-4 rounded-2xl">
                        <div className="max-h-[450px] max-w-full overflow-auto">
                            <Table
                                header={
                                    <tr className="text-center">
                                        {
                                            Header.map((item) => (
                                                <TableHeader className="px-4" key={item} item={item} />
                                            ))
                                        }
                                    </tr>
                                }
                                columns={currentItems.map((item => (
                                    <tr key={item.id} className="bg-transparent rounded-xl text-center">
                                        <TableColumn >
                                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                {item.id}
                                            </Text>
                                        </TableColumn>
                                        <TableColumn>
                                            <div className="flex flex-row items-center justify-center w-full gap-2">
                                                <div className="relative w-8 h-8">
                                                    <Image src={item.instructor.img} alt="Promocion Image - (Avanzu)" fill className="object-center object-cover rounded-full" />
                                                </div>
                                                <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                    {item.instructor.nombre}
                                                </Text>
                                            </div>
                                        </TableColumn>
                                        <TableColumn >
                                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                {item.complete}
                                            </Text>
                                        </TableColumn>
                                        <TableColumn>
                                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                {item.unido}
                                            </Text>
                                        </TableColumn>
                                        <TableColumn>
                                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                {item.completo}
                                            </Text>
                                        </TableColumn>
                                        <TableColumn>
                                            <Button type="button" onClick={() => {
                                                setId(item.id)
                                                setOpen(true)
                                            }} variant="secondary-subtle">
                                                Detalles
                                            </Button>
                                        </TableColumn>
                                    </tr>
                                )))
                                }
                            />
                        </div>
                    </div>
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
            </div>
            <ModalEstudianteSingle
                openCertif={openCertif}
                setCertif={setCertif}
                open={open}
                setOpen={setOpen}
                id={id}
                setId={setId}
            />
        </div>
    );
}

export default MiEstudiantePage;

export const dummy = [
    {
        name: 'EL ultimo'
    },
    {
        name: 'Más antiguo'
    },
]

export const Header = [
    'No',
    'Estudiante',
    'Fecha de ingreso',
    'Curso unido',
    'Curso completo',
    ''
]

export const data = [
    {
        id: 1,
        instructor: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        complete: '20/01/2024',
        puntaje: 80,
        unido: 5,
        completo: 10,
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 2,
        instructor: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        complete: '20/01/2024',
        puntaje: 80,
        unido: 5,
        completo: 10,
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 3,
        instructor: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        complete: '20/01/2024',
        puntaje: 80,
        unido: 5,
        completo: 10,
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 4,
        instructor: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        complete: '20/01/2024',
        puntaje: 80,
        unido: 5,
        completo: 10,
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 5,
        instructor: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        complete: '20/01/2024',
        puntaje: 80,
        unido: 5,
        completo: 10,
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 6,
        instructor: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        complete: '20/01/2024',
        puntaje: 80,
        unido: 5,
        completo: 10,
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
]