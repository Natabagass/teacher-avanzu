import DashboardLayout from "@layout/dashboard-layout";
import MiEstudiantePage from "@sections/dashboard/mi-estudiante";

const MiEstudiante = () => {
    return ( 
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <MiEstudiantePage />
        </DashboardLayout>
     );
}
 
export default MiEstudiante;