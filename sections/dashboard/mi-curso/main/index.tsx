'use client'

import CourseCard from "@components/card/course-global";
import SingleCourse from "@components/card/single-course";
import Links from "@components/link";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import { dummyContent } from "data/models/dummy/dummyContent";
import { useState } from "react";
import { TbChevronLeft, TbChevronRight, TbPlus } from "react-icons/tb";
import ReactPaginate from "react-paginate";

const MiCursoPage = () => {
    const itemsPerPage = 9
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = dummyContent ? dummyContent.slice(itemOffset, endOffset) : [];
    const pageCount = Math.ceil(dummyContent.length / itemsPerPage);
    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = (selected * itemsPerPage) % dummyContent.length;
        setItemOffset(newOffset);
    };

    return (
        <Layout variant="dashboard" className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-row justify-between">
                <Text size="h3" variant="title" weight="font-semibold">Mi Curso</Text>
                <div>
                    <Links href="/dashboard/curso/crear" padding="px-6 py-4" variant="primary" className="flex flex-row items-center w-full gap-2">
                        <TbPlus />
                        Añadir curso
                    </Links>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-6">
                {
                    currentItems.map((item, index) => (
                        <SingleCourse key={index} item={item} />
                    ))
                }
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
        </Layout>
    );
}

export default MiCursoPage;
