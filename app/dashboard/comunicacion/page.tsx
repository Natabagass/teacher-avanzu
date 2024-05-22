import DashboardLayout from "@layout/dashboard-layout";
import ComunicacionPage from "@sections/dashboard/comunicacion";

const Comunicacion = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <ComunicacionPage />
        </DashboardLayout>
    );
}

export default Comunicacion;