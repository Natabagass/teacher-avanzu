import Text from "@components/text";
import SalesStatisticHeader from "./header";
import PieSalesStatistic from "./pie";

const SalesStatistic = () => {
    return (
        <div className="flex flex-col w-full gap-6">
            <Text size="h3" weight="font-semibold" variant="title">Estadísticas del curso</Text>
            {/* <SalesStatisticHeader /> */}
            <PieSalesStatistic />
        </div>
    );
}

export default SalesStatistic;