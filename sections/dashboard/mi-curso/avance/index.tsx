import BackButton from "@components/button/back";
import CursosPreview from "@components/course/preview";
import Text from "@components/text";
import { dummyContent } from "data/models/dummy/dummyContent";

const AvanceMiCursoPage = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex bg-purple-100 py-3 px-4 items-center flex-row w-full justify-between z-50">
                <div>
                    <BackButton />
                </div>
                <div>
                    <Text size="p1" weight="font-medium" variant="title">Modo de vista previa</Text>
                </div>
                <div />
            </div>
            <div>
                <CursosPreview
                    data={data}
                />
            </div>
        </div>
    );
}

export default AvanceMiCursoPage;

export const data = {
    tag: 'New Course',
    id: 1,
    skills: 'Begineer',
    desc: 'React es una librería para crear interfaces de usuarios con código abierto, es decir, que está a disposición de cualquier programador para que use sus recursos e incluso haga colaboraciones. Esta biblioteca fue lanzada en el año. React es una librería para crear interfaces de usuarios con código abierto, es decir, que está a disposición de cualquier programador para que use sus recursos e incluso haga colaboraciones. Esta biblioteca fue lanzada en el año',
    img: '/assets/cursos/course-img.png',
    title: 'Inteligencia de Negocios con Tableau',
    rating: '4.8(123)',
    author: {
        name: 'Universidad San Jose',
        img: '/assets/landing/person-1.png'
    },
    time: '123',
    course: '24',
    percent: '(76%)',
    price: '$120',
    resenas: {
        star: 4.0,
        total: 123,
        details: [
            {
                star: 90,
                rating: 5,
            },
            {
                star: 50,
                rating: 4,
            },
            {
                star: 20,
                rating: 3,
            },
            {
                rating: 2,
                star: 0,
            },
            {
                rating: 1,
                star: 0
            }
        ],
        list: [
            {
                id: 1,
                name: 'Courtney Henry',
                date: '15 Feb',
                img: '/assets/cursos/person-2.png',
                desc: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!",
                star: 4
            },
            {
                id: 2,
                name: 'Ralph Edwards',
                date: '15 Feb',
                img: '/assets/cursos/person-2.png',
                desc: "El entusiasmo del instructor fue contagioso y las lecciones concisas me mantuvieron interesado. Las tareas de los cursos fueron desafiantes pero manejables, reforzando conceptos clave. En general, unos cursos de primer nivel que volvería a realizar.",
                star: 5
            },
            {
                id: 3,
                name: 'Jane Cooper',
                date: '15 Feb',
                img: '/assets/cursos/person-2.png',
                desc: "Nice Mentor",
                star: 3
            },
            {
                id: 4,
                name: 'Courtney Henry',
                date: '15 Feb',
                img: '/assets/cursos/person-2.png',
                desc: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!",
                star: 4
            },
            {
                id: 5,
                name: 'Ralph Edwards',
                date: '15 Feb',
                img: '/assets/cursos/person-2.png',
                desc: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!",
                star: 5
            },
            {
                id: 6,
                name: 'Jane Cooper',
                date: '15 Feb',
                img: '/assets/cursos/person-2.png',
                desc: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!",
                star: 3
            },
        ]
    },
    modul: [
        {
            id: 1,
            name: 'Empezando',
            course: 4,
            time: 12,
            flag: false,
            subModul: [
                {
                    id: 1,
                    title: 'Video de intoruccion a los cursos',
                    time: '5:24',
                    flag: false,
                    type: 'course',
                },
                {
                    id: 2,
                    title: 'Ejemplo de UIUX',
                    time: '2:24',
                    flag: false,
                    type: 'quiz'
                },
                {
                    id: 3,
                    title: 'Video de intoruccion a los cursos',
                    time: '5:24',
                    flag: false,
                    type: 'video'
                },
            ]
        }
    ]
}
