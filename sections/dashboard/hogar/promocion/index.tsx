import Layout from "@layout/main-layout";
import Text from "@components/text";
import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Links from "@components/link";
import Image from "next/image";
import ImageBlur from "@components/dynamic-blur";

const Promocion = () => {
    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            <Text size="h3" weight="font-semibold" variant="title">Promoción en curso</Text>
            <div className="border border-stroke-primary rounded-2xl p-4">
                <div className="max-h-[450px] overflow-auto">
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
                        columns={data.map((item => (
                            <tr key={item.id} className="bg-transparent rounded-xl text-center">
                                <TableColumn>
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.id}
                                    </Text>
                                </TableColumn>
                                <TableColumn >
                                    <div className="flex flex-row justify-start w-full gap-2">
                                        <div className="relative w-20 h-12">
                                            <ImageBlur src={item.img} alt="Promocion Image - (Avanzu)" fill className="object-center object-cover rounded-xl" />
                                        </div>
                                        <div className="flex flex-col items-start w-full gap-2">
                                            <Text variant="title" weight="font-semibold" size="p2" color="text-white">
                                                {item.name}
                                            </Text>
                                            <Text variant="paragraph" weight="font-normal" size="cpt1" color="text-content-secondary">
                                                {item.subTitle}
                                            </Text>
                                        </div>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.finichio}
                                    </Text>
                                </TableColumn>
                                <TableColumn>
                                    <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                        {item.final}
                                    </Text>
                                </TableColumn>
                                <TableColumn>
                                    <Links href="/" variant="primary">
                                        Detalles
                                    </Links>
                                </TableColumn>
                            </tr>
                        )))
                        }
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Promocion;

export const Header = [
    'No',
    'Nombre de la promoción',
    'Fecha de inicio',
    'Fecha final',
    '',
]

export const data = [
    {
        id: 1,
        name: '¡¡Día del estudiante!!',
        subTitle: 'Regístrate ahora, ¡obtuve un descuento del 90%!',
        img: '/assets/cursos/course-img.png',
        finichio: '01/01/2024',
        final: '01/01/2024'
    },
    {
        id: 2,
        name: '¡¡Día del estudiante!!',
        subTitle: 'Regístrate ahora, ¡obtuve un descuento del 90%!',
        img: '/assets/cursos/course-img.png',
        finichio: '01/01/2024',
        final: '01/01/2024'
    },
    {
        id: 3,
        name: '¡¡Día del estudiante!!',
        subTitle: 'Regístrate ahora, ¡obtuve un descuento del 90%!',
        img: '/assets/cursos/course-img.png',
        finichio: '01/01/2024',
        final: '01/01/2024'
    },
    {
        id: 4,
        name: '¡¡Día del estudiante!!',
        subTitle: 'Regístrate ahora, ¡obtuve un descuento del 90%!',
        img: '/assets/cursos/course-img.png',
        finichio: '01/01/2024',
        final: '01/01/2024'
    },
    {
        id: 5,
        name: '¡¡Día del estudiante!!',
        subTitle: 'Regístrate ahora, ¡obtuve un descuento del 90%!',
        img: '/assets/cursos/course-img.png',
        finichio: '01/01/2024',
        final: '01/01/2024'
    },
]