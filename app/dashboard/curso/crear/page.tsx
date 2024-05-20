import DashboardLayout from "@layout/dashboard-layout";
import CrearCursoPage from "@sections/dashboard/mi-curso/create/main";

const CrearCurso = () => {
    return (
        <DashboardLayout variant="banner" scroll={false}>
            <CrearCursoPage />
        </DashboardLayout>
    );
}

export default CrearCurso;