import DashboardLayout from "@layout/dashboard-layout";
import ConfiguracionDeCuentaPage from "@sections/dashboard/configracion-de-cuenta";

const ConfiguracionDeCuenta = () => {
    return ( 
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <ConfiguracionDeCuentaPage />
        </DashboardLayout>
     );
}
 
export default ConfiguracionDeCuenta;