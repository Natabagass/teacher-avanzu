import DashboardLayout from "@layout/dashboard-layout";
import MiCursoDetallesPage from "@sections/dashboard/mi-curso/detalles/main";

const MiCursoDetalles = () => {
    return (
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <MiCursoDetallesPage />
        </DashboardLayout>
    );
}

export default MiCursoDetalles;