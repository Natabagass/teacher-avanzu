import DashboardLayout from "@layout/dashboard-layout";
import CalificacionDeCursosPage from "@sections/dashboard/hogar/calificacion-de-curso/main";

const CalificacionDeCursos = () => {
    return ( 
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <CalificacionDeCursosPage />
        </DashboardLayout>
     );
}
 
export default CalificacionDeCursos;