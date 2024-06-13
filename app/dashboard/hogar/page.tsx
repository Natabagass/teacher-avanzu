import DashboardLayout from "@layout/dashboard-layout";
import HogarPage from "@sections/dashboard/hogar/main";

const Hogar = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <HogarPage />
        </DashboardLayout>
    );
}

export default Hogar;