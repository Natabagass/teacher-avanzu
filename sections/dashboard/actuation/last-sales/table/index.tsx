import Table from "@components/table";
import TableHeader from "@components/table/table-header";
import TableColumn from "@components/table/table-column";
import Image from "next/image";
import Text from "@components/text";
import { TbBooks } from "react-icons/tb";
import { dollarFormatter } from "@utils/formatter/dollar-formatter";

const TableSales = () => {
    return (
        <div className="w-full h-full border border-stroke-primary rounded-2xl p-4 flex flex-col gap-6">
            <div className="max-h-[450px] max-w-full overflow-auto">
                <Table
                    header={
                        <tr className="text-center">
                            {
                                Header.map((item) => (
                                    <TableHeader className={`${item === 'Curso' && 'text-left'} px-4`} key={item} item={item} />
                                ))
                            }
                        </tr>
                    }
                    columns={data.map((item => (
                        <tr key={item.id} className="bg-transparent rounded-xl text-center">
                            <TableColumn padding="py-4" className="w-full">
                                <div className="flex flex-row items-center w-full gap-2">
                                    <div className="relative w-[60%] min-h-[100px]">
                                        <Image src={item.course.img} fill alt="Image Course - (Avanzu)" className="rounded-2xl object-cover object-center" />
                                    </div>
                                    <div className="flex items-start flex-col w-full gap-2">
                                        <Text variant="title" weight="font-normal" size="p2" color="text-white">
                                            {item.course.title}
                                        </Text>
                                        <Text size="p3" weight="font-medium" color="text-content-secondary">{item.date}</Text>
                                    </div>
                                </div>
                            </TableColumn>
                            <TableColumn >
                                <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                    {item.ventas}
                                </Text>
                            </TableColumn>
                            <TableColumn>
                                <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                    {dollarFormatter(item.ganar)}
                                </Text>
                            </TableColumn>
                        </tr>
                    )))
                    }
                />
            </div>
        </div>
    );
}

export default TableSales;

export const data = [
    {
        id: 1,
        ventas: 12,
        ganar: 12356,
        date: '15/02/2024 3:36 AM',
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 2,
        ventas: 12,
        ganar: 12356,
        date: '15/02/2024 3:36 AM',
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 3,
        ventas: 12,
        ganar: 12356,
        date: '15/02/2024 3:36 AM',
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 4,
        ventas: 12,
        ganar: 12356,
        date: '15/02/2024 3:36 AM',
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 5,
        ventas: 12,
        ganar: 12356,
        date: '15/02/2024 3:36 AM',
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
    {
        id: 6,
        ventas: 12,
        ganar: 12356,
        date: '15/02/2024 3:36 AM',
        course: {
            title: 'React Desde Curso',
            leccion: 37,
            img: '/assets/cursos/course-img.png'
        }
    },
]

const Header = [
    'Curso',
    'Ventas',
    'Ganar',
    '',
]