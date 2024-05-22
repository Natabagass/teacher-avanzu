import DashboardLayout from "@layout/dashboard-layout";
import MainProfileSection from "@sections/dashboard/profile/main";

const EditarPerfil = () => {
    return (
        <DashboardLayout variant="non-sidebar" scroll={false}>
            <MainProfileSection />
        </DashboardLayout>
    );
}

export default EditarPerfil;