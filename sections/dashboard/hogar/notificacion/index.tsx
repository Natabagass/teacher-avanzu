'use client'

import BackButton from "@components/button/back";
import Text from "@components/text";
import CardNotif from "./card-notif";
import { useState } from "react";

const NotificacionPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full flex justify-center">
            <div className="flex w-[75%] gap-6 justify-center flex-col items-start">
                <BackButton />

                <Text size="h3" weight="font-semibold" variant="title">Notificación</Text>
                {
                    data.map((item) => (
                        <CardNotif
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            item={item}
                        />
                    ))
                }
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