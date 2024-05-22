import DashboardLayout from "@layout/dashboard-layout";
import AyudaPage from "@sections/dashboard/ayuda/ main";

const Ayuda = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <AyudaPage />
        </DashboardLayout>
    );
}

export default Ayuda;