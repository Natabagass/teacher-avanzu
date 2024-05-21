import DashboardLayout from "@layout/dashboard-layout";
import IntentoDePruebaPage from "@sections/dashboard/intento-de-prueba";

const IntentoDePrueba = () => {
    return (
        <DashboardLayout variant="sidebar" scroll={false}>
            <IntentoDePruebaPage />
        </DashboardLayout>
    );
}

export default IntentoDePrueba;