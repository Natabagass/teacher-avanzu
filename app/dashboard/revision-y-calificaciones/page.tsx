import DashboardLayout from "@layout/dashboard-layout";
import RevisionCalificacionesPage from "@sections/dashboard/hogar/revision-calificaciones/main";

const RevisionCalificaciones = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <RevisionCalificacionesPage />
        </DashboardLayout>
    );
}

export default RevisionCalificaciones;