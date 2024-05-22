'use client'

import BackButton from "@components/button/back";
import Text from "@components/text";
import CardNotif from "./card-notif";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const NotificacionPage = () => {
    const [open, setOpen] = useState(0)
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
        <div className="w-full flex justify-center">
            <div className="flex w-[75%] gap-6 justify-center flex-col items-start">
                <BackButton />

                <Text size="h3" weight="font-semibold" variant="title">Notificación</Text>
                {
                    currentItems.map((item) => (
                        <CardNotif
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            item={item}
                        />
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
        </div>
    );
}

export default NotificacionPage;

const data = [
    {
        id: 1,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 2,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 3,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 4,
        read: false,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 5,
        read: false,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 6,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 7,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 8,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 9,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 10,
        read: true,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
    {
        id: 11,
        read: false,
        img: '/assets/cursos/person-2.png',
        text: `Osman Delusionx reseña publicada en React desde cero curso: En general, recomiendo este curso a cualquiera que busque mejorar sus habilidades de programación en Python. Ya sea que sea un principiante o un programador experimentado, hay algo valioso que aprender de 'Dominar la programación en Python'`,
        time: '10 mins'
    },
]