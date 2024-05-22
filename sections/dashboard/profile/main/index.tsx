import Layout from "@layout/main-layout";
import ChangePhoto from "../change-photo";
import ProgressBarProfile from "../data-profile";

const MainProfileSection = () => {
    return (
        <Layout variant="content-dashboard" className="border border-stroke-primary rounded-3xl p-4">
            <ChangePhoto />
            <ProgressBarProfile />
        </Layout>
    );
}

export default MainProfileSection;