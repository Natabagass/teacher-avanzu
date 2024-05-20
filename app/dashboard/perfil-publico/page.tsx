import DashboardLayout from "@layout/dashboard-layout";
import PerfilPublicoPage from "@sections/dashboard/perfil-publico/main";

const PerfilPublico = () => {
    return ( 
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <PerfilPublicoPage />
        </DashboardLayout>
     );
}
 
export default PerfilPublico;