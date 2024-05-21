import DashboardLayout from "@layout/dashboard-layout";
import AvanceMiCursoPage from "@sections/dashboard/mi-curso/avance";

const AvanceMiCurso = () => {
    return (
        <DashboardLayout variant="non-sidebar" scroll={false} padding="p-0">
            <AvanceMiCursoPage />
        </DashboardLayout>
    );
}

export default AvanceMiCurso;