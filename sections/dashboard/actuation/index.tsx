'use client'

import Layout from "@layout/main-layout";
import OverviewActuation from "./overview";
import { useEffect, useState } from "react";
import LastSalesActuation from "./last-sales";
import SalesStatistic from "../hogar/sales-statistic";
import LoadingPage from "@components/loading";
import UserAnalytic from "./analytic";

const ActuationPage = () => {
    const [total, setTotal] = useState({
        cursos: 0,
        loadingAnalytic: false,
        loadingCursos: true,
        loadingStudent: true,
        student: 0
    })

    const datas = async () => {
        try {
            const resCursos = await fetch('/api/users/self/courses?page=1&per-page=1&as-creator=true', { method: 'GET' });
            const jsonCursos = await resCursos.json();
            if (resCursos.status === 200) {
                setTotal((prevTotal) => ({ ...prevTotal, loadingCursos: false, cursos: jsonCursos.metadata?.totalCount }));
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        }

        try {
            const resStudents = await fetch('/api/users/self/courses/students?page=1&per-page=1', { method: 'GET' });
            const jsonStudents = await resStudents.json();
            if (resStudents.status === 200) {
                setTotal((prevTotal) => ({ ...prevTotal, loadingStudent: false, student: jsonStudents.metadata?.totalCount }));
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        datas();
    }, []);

    return (
        <div className="flex flex-col w-full gap-6">
            {
                total.loadingStudent || total.loadingCursos ?
                    <LoadingPage />
                    :
                    <>
                        <OverviewActuation data={total} />
                        <UserAnalytic loading={total.loadingAnalytic} />
                        <Layout variant="dashboard" className="flex flex-row w-full justify-between gap-6">
                            <LastSalesActuation />
                            <SalesStatistic />
                        </Layout>
                    </>
            }
        </div>
    );
}

export default ActuationPage;