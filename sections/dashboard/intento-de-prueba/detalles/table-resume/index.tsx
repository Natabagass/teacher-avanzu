import Table from "@components/table";
import TableColumn from "@components/table/table-column";
import TableHeader from "@components/table/table-header";
import Text from "@components/text";

const TableResume = ({
    data
}: {
    data: {
        row_num: number,
        intentar: string,
        preguntas: string,
        respuesta_dada: string,
        respuesta_correcta: string,
        correct: boolean
    }[]
}) => {
    return (
        <>
            <Table
                variant="border"
                header={
                    <tr className="text-center">
                        {
                            Header.map((item, index) => (
                                <TableHeader variant="border" key={item} item={item} />
                            ))
                        }
                    </tr>
                }
                columns={data.map((item, index) => (
                    <tr key={item.row_num} className="border border-stroke-primary text-center">
                        <TableColumn variant="border" padding="px-4">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item?.row_num}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border" className="text-left w-[20%]">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item?.preguntas}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border" className="text-left">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item?.respuesta_dada}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border" className="text-left">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item?.respuesta_correcta}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border">
                            <Text variant="subTitle" weight="font-normal" size="p2" color="text-white">
                                {item?.intentar}
                            </Text>
                        </TableColumn>
                        <TableColumn variant="border">
                            <Text variant="subTitle" weight="font-normal" size="p2" color={item.correct ? 'text-green-200' : 'text-red-300'}>
                                {item?.correct ? 'Correcto' : 'Incorrecto'}
                            </Text>
                        </TableColumn>
                    </tr>
                ))}
            />
        </>
    );
}

export default TableResume;

export const Header = [
    'No',
    'Tipo',
    'Preguntas',
    'Requesta dada',
    'Respuesta Correcta',
    'Resultado'
]