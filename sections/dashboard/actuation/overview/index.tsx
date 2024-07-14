import Button from "@components/button";
import Text from "@components/text";
import Layout from "@layout/main-layout";
import { dollarFormatter } from "@utils/formatter/dollar-formatter";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbBook2, TbBooks, TbCashBanknote, TbDownload, TbSchool, TbSparkles, TbStars, TbUsersGroup } from "react-icons/tb";

const OverviewActuation = ({ data }: { data: { cursos: number, loadingCursos: boolean, loadingStudent: boolean, student: number } }) => {

    const dataOverview = [
        {
            id: 1,
            name: 'Ganancia total',
            total: '120800',
            path: '',
            loading: false,
            icon: TbCashBanknote
        },
        {
            id: 2,
            name: 'Cursos Totales',
            path: 'mi-curso',
            loading: data.loadingCursos,
            total: data.cursos,
            icon: TbBooks
        },
        {
            id: 3,
            name: 'Estudiantes Totales',
            path: 'mi-estudiante',
            loading: data.loadingStudent,
            total: data.student,
            icon: TbUsersGroup
        },
        {
            id: 4,
            name: 'Valoraciones medias',
            path: '',
            loading: false,
            total: '4.8',
            icon: TbStars
        }
    ]

    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            <div className="flex flex-row w-full items-center justify-between">
                <Text size="h3" weight="font-semibold" variant="title">Descripción General</Text>
                <Button size="btn2" type="button" variant="secondary-subtle" padding="px-6 py-4" className="flex flex-row items-center gap-2">
                    <TbDownload className="text-xl text-white" />
                    Exportar como informe
                </Button>
            </div>
            <div className="grid grid-cols-4 w-full gap-4">
                {
                    dataOverview.map((item) => (
                        <Link href={item.path} key={item.id} className="border border-stroke-primary p-4 rounded-2xl items-start flex flex-col gap-2">
                            <div className="rounded-full border border-stroke-primary p-3 bg-purple-100">
                                <item.icon className="text-xl text-white" />
                            </div>
                            <Text size="p2" color="text-content-secondary" weight="font-medium">{item.name}</Text>
                            <Text size="h3" weight="font-bold">
                                {item.loading ? (
                                    <AiOutlineLoading3Quarters className="text-purple-blue-500 animate-spin text-2xl" />
                                ) : (
                                    item.id === 1 ? dollarFormatter(item.total) : item.total
                                )}
                            </Text>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    );
}

export default OverviewActuation;