'use client'

import Button from "@components/button";
import BackButton from "@components/button/back";
import Links from "@components/link";
import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Text from "@components/text";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbBooks, TbChevronLeft, TbChevronRight, TbDownload } from "react-icons/tb";
import ReactPaginate from "react-paginate";
import ModalEstudianteSingle from "./modal";
import { UsersTypes, UsersValue } from "data/types/interface/users";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import LoadingPage from "@components/loading";
import dayjs from "dayjs";
import ImageBlur from "@components/dynamic-blur";

const MiEstudiantePage = () => {
    const [students, setStudents] = useState<UsersTypes>(UsersValue)
    const [id, setId] = useState(0)
    const [openCertif, setCertif] = useState('')
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [urls, setUrls] = useState({
        self: '/api/users/self/courses/students?page=1&per-page=9',
        first: '',
        previous: '',
        next: '',
        last: ''
    });
    const handlePageClick = ({ selected }: { selected: number }) => {
        let newPage = selected + 1;
        let newUrl = `/api/users/self/courses/students?page=${newPage}&per-page=9`;

        if (selected + 1 > currentPage && urls.next) {
            newUrl = urls.next;
        } else if (selected + 1 < currentPage && urls.previous) {
            newUrl = urls.previous;
        }

        setUrls(prevUrls => ({
            ...prevUrls,
            self: newUrl
        }));
        setCurrentPage(newPage);
    };

    const datas = async (url: string) => {
        const students = await fetch(url)
        const data = await students.json()
        if (students.status === 200) {
            setStudents(data)
        }
    }

    useEffect(() => {
        datas(urls.self)
    }, [urls.self])

    return (
        <div className="w-full flex justify-center">
            {
                students.metadata.page !== 0 ?
                    <>
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
                                            columns={students.records.map((item => (
                                                <tr key={item.id} className="bg-transparent rounded-xl text-center">
                                                    <TableColumn >
                                                        <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                            {item.id}
                                                        </Text>
                                                    </TableColumn>
                                                    <TableColumn>
                                                        <div className="flex flex-row items-center justify-start w-full gap-2">
                                                            <div className="relative w-14 h-14">
                                                                <ImageBlur src={item.profilePicture || `${URL_DUMMY_IMAGE}?name=user&size=120`} alt="Promocion Image - (Avanzu)" fill className="object-center object-cover rounded-full" />
                                                            </div>
                                                            <div className="flex flex-col items-start gap-2">
                                                                <Text variant="subTitle" weight="font-semibold" size="p2" color="text-white">
                                                                    {item.name}
                                                                </Text>
                                                                <Text variant="subTitle" weight="font-normal" size="cpt1" color="text-content-secondary">
                                                                    {item.email}
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </TableColumn>
                                                    <TableColumn >
                                                        <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                            {dayjs(item.joinedAt, 'DD/MM/YYYY').format('DD/MM/YYYY') || '-'}
                                                        </Text>
                                                    </TableColumn>
                                                    <TableColumn>
                                                        <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                            {item.joinedCourses}
                                                        </Text>
                                                    </TableColumn>
                                                    <TableColumn>
                                                        <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                            {item.completes || 0}
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
                                    pageCount={students.metadata.pageCount}
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
                    </>
                    :
                    <LoadingPage />
            }
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