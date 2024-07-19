'use client'

import Button from "@components/button";
import Input from "@components/input";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbChevronLeft, TbChevronRight, TbSearch } from "react-icons/tb";
import ReactPaginate from "react-paginate";
import ModalComunicacion from "./modal";
import ImageBlur from "@components/dynamic-blur";
import { QNATypes, QNAValue } from "data/types/interface/course/qna";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import LoadingPage from "@components/loading";

const ComunicacionPage = () => {
    const [state, setState] = useState({
        page: 1,
        open: false,
        id: 1,
        courseID: 1,
        condition: false,
        status: false,
        answer: ''
    })
    const [data, setData] = useState<QNATypes>(QNAValue)
    const { register, formState: { errors }, control } = useForm()
    const [currentPage, setCurrentPage] = useState(1);
    const [refresh, setRefresh] = useState(true)
    const [urls, setUrls] = useState({
        self: `/api/course-questions/?page=1&per-page=10&isAnswered=false`,
        first: '',
        previous: '',
        next: '',
        last: ''
    });

    const handlePageClick = ({ selected }: { selected: number }) => {
        let newPage = selected + 1;
        let newUrl = `/api/course-questions?${newPage}&per-page=10&isAnswered=${state.condition}`;

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
        const rs = await fetch(url)
        const data = await rs.json()
        if (rs.status === 200) {
            setData(data)
            setRefresh(false)
        }
    }

    useEffect(() => {
        setUrls(prevUrls => ({
            ...prevUrls,
            self: `/api/course-questions/?page=1&per-page=10&isAnswered=${state.condition}`,
        }));
        setRefresh(true);
    }, [state.condition]);

    useEffect(() => {
        if (refresh) {
            datas(urls.self);
        }
    }, [urls.self, refresh]);

    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            {
                data.metadata.page !== 0 ?
                    <>
                        <Text size="h3" weight="font-semibold" variant="title">Comunicación</Text>
                        <div className="flex flex-row w-full items-center justify-between">
                            <div className="flex flex-row w-[20%]">
                                {
                                    menu.map((item) => (
                                        <div key={item.id} className="flex justify-start w-full">
                                            <Button padding="px-6 py-4" onClick={() => {
                                                setState({ ...state, condition: item.condition })
                                            }}
                                                type="button" size="btn1" variant={item.condition === state.condition ? 'primary' : 'secondary-subtle'}>
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
                                data.records.map((item) => (
                                    <div key={item.ID} className="border border-stroke-primary rounded-2xl p-2 flex flex-row w-full gap-3">
                                        <div className="relative min-h-[150px] w-[30%]">
                                            <ImageBlur src={'/assets/cursos/course-img.png'} alt="Course - (Avanzu)" fill className="object-cover rounded-xl object-center" />
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <div className="flex flex-row w-full items-center justify-between">
                                                <Text size="h3" weight="font-semibold" variant="title">{item.courseTitle}</Text>
                                                <div className={` ${item.isAnswered ? 'border-green-200' : 'border-orange-200'} border rounded-2xl p-2`}>
                                                    <Text size="cpt1" weight="font-medium" color={item.isAnswered ? 'text-green-200' : 'text-orange-200'}>{item.isAnswered ? 'Contestada' : 'No leído'}</Text>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-purple-100 rounded-xl flex flex-col gap-4">
                                                <div className="w-full items-center flex flex-row gap-2">
                                                    <div className="relative w-8 h-8">
                                                        <ImageBlur src={item.userProfilePicture || `${URL_DUMMY_IMAGE}?name=${item.userDisplayName}&size=120`} alt="Profile - (Avanzu)" fill className="object-cover rounded-full object-center" />
                                                    </div>
                                                    <Text size="p2" weight="font-medium" variant="subTitle">{item.userDisplayName}</Text>
                                                    <span className="text-content-secondary">
                                                        &#x2022;
                                                    </span>
                                                    <Text size="p2" weight="font-normal" color="text-content-secondary">{item.createdAt}</Text>
                                                </div>
                                                <div className="flex flex-row w-full justify-between">
                                                    <Text size="p2" weight="font-normal">{item.question}</Text>
                                                    <Button
                                                        onClick={() => {
                                                            setState({ ...state, id: item.ID, courseID: item.courseID, open: true, status: item.isAnswered, answer: item.answer })
                                                        }}
                                                        variant="clear" className="text-white" type="button" size="btn2">
                                                        {
                                                            item.isAnswered ?
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
                                pageCount={data.metadata.pageCount}
                                containerClassName={"pagination-item"}
                                pageClassName={"page-item text-white bg-purple-300 p-4 rounded-full font-medium"}
                                activeClassName={"active"}
                            />
                        </div>
                        {
                            state.open &&
                            <ModalComunicacion
                                setRefresh={setRefresh}
                                state={state}
                                setState={setState}
                            />
                        }
                    </>
                    :
                    <LoadingPage />
            }
        </Layout >
    );
}

export default ComunicacionPage;

const menu = [
    {
        id: 1,
        name: 'No leído',
        condition: false
    },
    {
        id: 2,
        name: 'Contestada',
        condition: true
    }
]
