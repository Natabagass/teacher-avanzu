import SliderCourseDetail from "@components/slider/course-detail";
import Text from "@components/text";
import Layout from "@layout/main-layout";

const CursosPopular = () => {
    return (
        <Layout variant="dashboard" className="flex flex-col w-full mt-8">
            <Text size="h3" weight="font-semibold">Cursos Popular</Text>
            <SliderCourseDetail />
        </Layout>
    );
}

export default CursosPopular;