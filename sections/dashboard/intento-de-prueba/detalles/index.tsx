import BackButton from "@components/button/back";
import TableDetalles from "./table-detalles";
import Text from "@components/text";
import TableResume from "./table-resume";

const IntentoDetallespage = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex w-[75%] gap-8 justify-center flex-col items-start">
                <BackButton />

                <div className="flex flex-col w-full gap-4">
                    <Text size="h3" weight="font-semibold" variant="title">Detalles</Text>
                    <TableDetalles
                        item={user}
                    />
                </div>

                <div className="flex flex-col w-full gap-4">
                    <Text size="h3" weight="font-semibold" variant="title">Resumen del cuestionario</Text>
                    <TableResume
                        data={answer}
                    />
                </div>
            </div>
        </div>
    );
}

export default IntentoDetallespage;

export const answer = [
    {
        row_num: 1,
        intentar: '1 0f 3',
        preguntas: '¿Qué es el Virtual DOM en React?',
        respuesta_dada: 'Una herramienta de depuración para inspeccionar el estado de la aplicación.',
        respuesta_correcta: 'Una representación virtual de los componentes y elementos HTML en la memoria.',
        correct: true
    },
    {
        row_num: 2,
        intentar: '1 0f 3',
        preguntas: '¿Qué es el Virtual DOM en React?',
        respuesta_dada: 'Una herramienta de depuración para inspeccionar el estado de la aplicación.',
        respuesta_correcta: 'Una representación virtual de los componentes y elementos HTML en la memoria.',
        correct: false
    },
    {
        row_num: 3,
        intentar: '1 0f 3',
        preguntas: '¿Qué es el Virtual DOM en React?',
        respuesta_dada: 'Son los actos que el trabajador realiza en relación con el entorno laboral; sin perjudicarse a si mismo ni a un tercero.',
        respuesta_correcta: 'Una representación virtual de los componentes y elementos HTML en la memoria.',
        correct: false
    },
    {
        row_num: 4,
        intentar: '1 0f 3',
        preguntas: '¿Qué es el Virtual DOM en React?',
        respuesta_dada: 'Una herramienta de depuración para inspeccionar el estado de la aplicación.',
        respuesta_correcta: 'Una representación virtual de los componentes y elementos HTML en la memoria.',
        correct: true
    },
]

const user = {
    id: 1,
    profile: {
        nombre: 'Devon Lane',
        img: '/assets/cursos/person-2.png',
    },
    quiz: 'Quiz 1 - React desde cero',
    email: 'devon@gmail.com',
    fecha: '20/01/2024',
    intentar: '1 of 3',
    estado: true,
    progress: 80
}

