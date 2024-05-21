'use client'

import Button from "@components/button";
import EmptyList from "@components/empty-list";
import Text from "@components/text";
import CheckStar from "@components/utils/check-star";
import Image from "next/image";
import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import ReactPaginate from "react-paginate";
import ModalMoreRevision from "../modal/more";

const RevisionList = ({
    data
}: {
    data: {
        name: string,
        id: number,
        img: string,
        course: string,
        comment: string,
        date: string,
        star: number
    }[]
}) => {
    const itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const [open, setOpen] = useState(0)
    const currentItems = data ? data.slice(itemOffset, endOffset) : [];
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = (selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {
                data.length > 0 ?
                    <>
                        {
                            currentItems.map((item, index) => (
                                <div key={item.id} className="flex flex-col w-full border gap-3 p-3 border-stroke-primary rounded-2xl">
                                    <div className="flex flex-row w-full justify-between">
                                        <div className="flex flex-row w-full gap-2 items-center">
                                            <div className="relative h-8 w-8">
                                                <Image src={item.img} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                            </div>
                                            <Text size="p2" variant="subTitle" weight="font-medium" color="text-white">{item.name}</Text>
                                            <MdOutlineKeyboardArrowRight className="text-content-primary" />
                                            <Text size="p2" variant="subTitle-sub" weight="font-medium" color="text-white">{item.course}</Text>
                                            <span className="text-content-secondary">
                                                &#x2022;
                                            </span>
                                            <Text size="p2" weight="font-medium" color="text-content-secondary">{item.date}</Text>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Button variant="clear" type="button" onClick={() => setOpen(item.id === open ? 0 : item.id)}>
                                                <IoMdMore className="text-white text-lg" />
                                            </Button>
                                            <div className="absolute p-2 right-14 mt-6">
                                                {
                                                    open === item.id &&
                                                    <ModalMoreRevision />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <Text variant="paragraph" weight="font-normal" color="text-white" className="line-clamp-6" size="p2" >{item.comment}</Text>
                                    <div className="flex flex-row w-full gap-2">
                                        <CheckStar
                                            star={item.star}
                                            empty={true}
                                        />
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
                    </>
                    :
                    <EmptyList />
            }
        </>
    );
}

export default RevisionList;