'use client'

import ImageBlur from "@components/dynamic-blur";
import Links from "@components/link";
import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Text from "@components/text";
import Image from "next/image";
import { useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import ReactPaginate from "react-paginate";

const TableIntento = () => {
    const itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data ? data.slice(itemOffset, endOffset) : [];
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = (selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="border border-stroke-primary w-full p-4 rounded-2xl">
                <div className="max-h-full max-w-full overflow-auto">
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
                                <TableColumn>
                                    <div className="flex flex-row items-center text-left justify-center w-full gap-2">
                                        <div className="relative w-14 h-14">
                                            <ImageBlur src={item.profile.img} alt="Promocion Image - (Avanzu)" fill className="object-center object-cover rounded-full" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                {item.profile.nombre}
                                            </Text>
                                            <Text variant="subTitle-sub" weight="font-normal" size="cpt1" color="text-content-secondary">
                                                {item.quiz}
                                            </Text>
                                        </div>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.fecha}
                                    </Text>
                                </TableColumn>
                                <TableColumn>
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.progress}%
                                    </Text>
                                </TableColumn>
                                <TableColumn>
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.intentar}
                                    </Text>
                                </TableColumn>
                                <TableColumn className="w-[10%]">
                                    <Text variant="subTitle" weight="font-normal" size="p2" color={item.estado ? 'text-green-200' : 'text-red-300'}>
                                        {item.estado? 'Aprobado' : 'No aprobado'}
                                    </Text>
                                </TableColumn>
                                <TableColumn>
                                    <Links href={`/dashboard/intento-de-prueba/detalles/${item.id}`} variant="primary">
                                        Detalles
                                    </Links>
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
        </>
    );
}

export default TableIntento;

export const Header = [
    'Estudiante',
    'Correo electrónico',
    'Fecha de ingreso',
    'Finalización',
    'Estado',
    ''
]

export const data = [
    {
        id: 1,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 80
    },
    {
        id: 2,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 100
    },
    {
        id: 3,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: false,
        progress: 60
    },
    {
        id: 4,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 80
    },
    {
        id: 5,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: false,
        progress: 75
    },
    {
        id: 6,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 100
    },
    {
        id: 7,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 80
    },
    {
        id: 8,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: false,
        progress: 20
    },
    {
        id: 9,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 100
    },
    {
        id: 10,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 100
    },
    {
        id: 11,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        quiz: 'Quiz 1 - React desde cero',
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        intentar: '1 de 3',
        estado: true,
        progress: 80
    },
]