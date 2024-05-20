import DashboardLayout from "@layout/dashboard-layout";
import MiCursoPage from "@sections/dashboard/mi-curso/main";

const MiCurso = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <MiCursoPage />
        </DashboardLayout>
    );
}

export default MiCurso;