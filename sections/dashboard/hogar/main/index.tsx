import Layout from "@layout/main-layout";
import OverviewHogar from "../overview";
import SalesStatistic from "../sales-statistic";
import Promocion from "../promocion";
import HeaderHogar from "../overview";
import LastSales from "../last-sales";
import CursosPopular from "../cursos-popular";

const HogarPage = () => {
    return (
        <div className="flex flex-col w-full gap-6">
            <HeaderHogar />
            <Layout variant="dashboard" className="flex flex-row w-full justify-between gap-6">
                <LastSales />
                <SalesStatistic />
            </Layout>
            <CursosPopular />
        </div>
    );
}

export default HogarPage;