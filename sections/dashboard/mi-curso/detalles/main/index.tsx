'use client'

import Button from "@components/button";
import BackButton from "@components/button/back";
import ImageBlur from "@components/dynamic-blur";
import Links from "@components/link";
import LoadingPage from "@components/loading";
import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Text from "@components/text";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import { DetailCourseTypes, DetailCourseValue } from "data/types/interface/course/detail";
import { UsersTypes, UsersValue } from "data/types/interface/users";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";
import { TbBooks, TbChevronLeft, TbChevronRight, TbDownload } from "react-icons/tb";
import ReactPaginate from "react-paginate";

const MiCursoDetallesPage = () => {
    const params = useParams()
    const [data, setData] = useState<DetailCourseTypes>(DetailCourseValue)
    const datas = async () => {
        const rs = await fetch(`/api/courses/${params.id}`)
        const data = await rs.json()
        if (rs.status === 200) {
            setData(data)
        }
    }

    useEffect(() => {
        datas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [student, setStudent] = useState<UsersTypes>(UsersValue)
    const [currentPage, setCurrentPage] = useState(1);
    const [urls, setUrls] = useState({
        self: `/api/courses/${params.id}/users?page=1&per-page=10&sort-by=newest`,
        first: '',
        previous: '',
        next: '',
        last: ''
    });
    const handlePageClick = ({ selected }: { selected: number }) => {
        let newPage = selected + 1;
        let newUrl = `/api/courses/${params.id}/users?page=${newPage}&per-page=10&sort-by=newest`;

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

    const students = async (url: string) => {
        const cursos = await fetch(url)
        const dataCursos = await cursos.json()
        if (cursos.status === 200) {
            setStudent(dataCursos)
        }
    }

    useEffect(() => {
        students(urls.self)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urls.self])

    return (
        <div className="w-full flex justify-center">
            {
                student.metadata.page !== 0 && data ?
                    <div className="flex w-[75%] gap-6 justify-center flex-col items-start">
                        <BackButton />

                        <div className="border border-stroke-primary p-4 flex flex-row gap-4 w-full rounded-3xl">
                            <div className="relative w-[30%] min-h-full">
                                {/* <Image src={data.thumbnail} alt="Course - (Avanzu)" fill className="rounded-2xl object-cover object-center" /> */}
                            </div>
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex flex-row w-full items-center justify-between">
                                    <Text size="h3" weight="font-semibold" className="w-[50%]" variant="title">{data.title}</Text>
                                    <Links href={`/dashboard/mi-curso/avance/${params.id}`} padding="px-6 py-4" variant="primary">
                                        Vista previa del curso
                                    </Links>
                                </div>
                                <div className='w-full h-border bg-stroke-primary' />
                                <div className="flex items-center flex-row w-full gap-1 justify-between">
                                    <div className="flex flex-row w-full items-center gap-1">
                                        <LuClock className="text-white text-sm" />
                                        <Text size="p3" weight="font-medium" color="text-white">{data.hours || 0} Horas</Text>
                                        <span className="text-content-secondary">
                                            &#x2022;
                                        </span>
                                        <TbBooks className="text-white text-sm" />
                                        <Text size="p3" weight="font-medium" color="text-white">{data.lessonsCount || 0} Lección</Text>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex mt-8 flex-row justify-between">
                            <Text size="h3" variant="title" weight="font-semibold">Estudiante</Text>
                            <div>
                                <Button size="btn1" type="button" padding="px-6 py-4" variant="secondary-subtle" className="flex flex-row w-full gap-2">
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
                                    columns={student.records.map((item => (
                                        <tr key={item.id} className="bg-transparent rounded-xl text-center">
                                            <TableColumn>
                                                <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                    {item.id}
                                                </Text>
                                            </TableColumn>
                                            <TableColumn>
                                                <div className="flex flex-row items-center justify-center w-full gap-2">
                                                    <div className="relative w-8 h-8">
                                                        <ImageBlur src={`${URL_DUMMY_IMAGE}?name=user&size=120`} alt="Promocion Image - (Avanzu)" fill className="object-center object-cover rounded-full" />
                                                    </div>
                                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                        {item.name}
                                                    </Text>
                                                </div>
                                            </TableColumn>
                                            <TableColumn>
                                                <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                    {item.email}
                                                </Text>
                                            </TableColumn>
                                            <TableColumn>
                                                <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                                    {dayjs(item.joinedAt, 'DD/MM/YYYY').format('DD MMM YY') || '-'}
                                                </Text>
                                            </TableColumn>
                                            <TableColumn>
                                        <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                            {item.coursesProgress || 0}
                                        </Text>
                                    </TableColumn>
                                    <TableColumn className="w-[10%]">
                                        <div className={`${item.coursesProgress || 0 < 100 ? 'border-orange-200' : 'border-green-200'} border rounded-3xl p-2`}>
                                            <Text variant="subTitle" weight="font-normal" size="cpt1" color={item.coursesProgress || 0 < 100 ? 'text-orange-200' : 'text-green-200'}>
                                                {item.coursesProgress || 0 < 100 ? 'En curso' : 'Completado'}
                                            </Text>
                                        </div>
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
                            pageCount={student.metadata.pageCount}
                            containerClassName={"pagination-item"}
                            pageClassName={"page-item text-white bg-purple-300 p-4 rounded-full font-medium"}
                            activeClassName={"active"}
                        />
                    </div>
                    :
                    <LoadingPage />
            }
        </div>
    );
}

export default MiCursoDetallesPage;

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
    'Correo electrónico',
    'Fecha de ingreso',
    'Finalización',
    'Estado',
]

export const data = [
    {
        id: 1,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 80
    },
    {
        id: 2,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 100
    },
    {
        id: 3,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 60
    },
    {
        id: 4,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 80
    },
    {
        id: 5,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 75
    },
    {
        id: 6,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 100
    },
    {
        id: 7,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 80
    },
    {
        id: 8,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 20
    },
    {
        id: 9,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 100
    },
    {
        id: 10,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 100
    },
    {
        id: 11,
        profile: {
            nombre: 'Devon Lane',
            img: '/assets/cursos/person-2.png',
        },
        email: 'devon@gmail.com',
        fecha: '20/01/2024',
        progress: 80
    },
]