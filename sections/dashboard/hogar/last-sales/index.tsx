import Text from "@components/text";
import Layout from "@layout/main-layout";
import TableSales from "./table";

const LastSales = () => {
    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            <Text size="h3" weight="font-semibold" variant="title">Últimas ventas</Text>
            <TableSales />
        </Layout>
    );
}

export default LastSales;