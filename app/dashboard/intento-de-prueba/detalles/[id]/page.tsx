import DashboardLayout from "@layout/dashboard-layout";
import IntentoDetallespage from "@sections/dashboard/intento-de-prueba/detalles";

const IntentoDetalles = () => {
    return ( 
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <IntentoDetallespage />
        </DashboardLayout>
     );
}
 
export default IntentoDetalles;