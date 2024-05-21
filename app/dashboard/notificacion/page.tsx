import DashboardLayout from "@layout/dashboard-layout";
import NotificacionPage from "@sections/dashboard/hogar/notificacion";

const Notificacion = () => {
    return ( 
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <NotificacionPage />
        </DashboardLayout>
     );
}
 
export default Notificacion;