import Text from "@components/text";
import Layout from "@layout/main-layout";
import TableSales from "./table";

const LastSalesActuation = () => {
    return (
        <div className="flex flex-col w-full gap-6">
            <Text size="h3" weight="font-semibold" variant="title">Top Principales ventas de cursos</Text>
            <TableSales />
        </div>
    )
}

export default LastSalesActuation;