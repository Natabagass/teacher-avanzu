import DashboardLayout from "@layout/dashboard-layout";
import ActuationPage from "@sections/dashboard/actuation";
import AyudaPage from "@sections/dashboard/ayuda/ main";

const Actuation = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <ActuationPage />
        </DashboardLayout>
    );
}

export default Actuation;