import Text from "@components/text";
import RevisionList from "../list";
import FilterRevision from "../filter";
import Layout from "@layout/main-layout";

const RevisionCalificacionesPage = () => {
    return (
        <Layout variant="dashboard" className="w-full flex flex-col gap-6">
            <Text size="h3" weight="font-semibold" variant="title">Revisión y calificaciones</Text>

            <FilterRevision />
            <RevisionList
                data={dataResponse}
            />
        </Layout>
    );
}

export default RevisionCalificacionesPage;

export const dataResponse = [
    {
        id: 1,
        name: 'Bimaxavier',
        img: '/assets/cursos/person-2.png',
        course: 'React desde cero',
        star: 4,
        date: '15 Feb',
        comment: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!"
    },
    {
        id: 2,
        name: 'Bimaxavier',
        img: '/assets/cursos/person-2.png',
        course: 'React desde cero',
        star: 2,
        date: '15 Feb',
        comment: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!"
    },
    {
        id: 3,
        name: 'Bimaxavier',
        img: '/assets/cursos/person-2.png',
        course: 'React desde cero',
        star: 3,
        date: '15 Feb',
        comment: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!"
    },
    {
        id: 4,
        name: 'Bimaxavier',
        img: '/assets/cursos/person-2.png',
        course: 'React desde cero',
        star: 5,
        date: '15 Feb',
        comment: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!"
    },
    {
        id: 5,
        name: 'Bimaxavier',
        img: '/assets/cursos/person-2.png',
        course: 'React desde cero',
        star: 1,
        date: '15 Feb',
        comment: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!"
    },
    {
        id: 6,
        name: 'Bimaxavier',
        img: '/assets/cursos/person-2.png',
        course: 'React desde cero',
        star: 4,
        date: '15 Feb',
        comment: "Inteligencia de Negocios con Tableau was time well spent. The instructor's straightforward teaching style and well-organized content made learning seamless. The courses struck a perfect balance between depth and simplicity. I left each session feeling more confident in the subject. Highly recommended!"
    }
]