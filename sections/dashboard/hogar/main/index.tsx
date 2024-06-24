'use client'

import Layout from "@layout/main-layout";
import SalesStatistic from "../sales-statistic";
import HeaderHogar from "../overview";
import LastSales from "../last-sales";
import CursosPopular from "../cursos-popular";
import { useEffect, useState } from "react";
import { AnalyticData, AnalyticDataValue } from "data/types/interface/analytic-data";
import LoadingPage from "@components/loading";

const HogarPage = () => {
    const [total, setTotal] = useState({
        cursos: 0,
        loadingCursos: true,
        loadingStudent: true,
        student: 0
    })
    const [analyticData, setAnalyticData] = useState<AnalyticData>(AnalyticDataValue)

    const datas = async () => {
        try {
            const resCursos = await fetch('/api/users/self/courses?page=1&per-page=1&as-creator=true', { method: 'GET' });
            const jsonCursos = await resCursos.json();
            if (resCursos.status === 200) {
                setTotal({ ...total, loadingCursos: false })
            }
            setTotal((prevTotal) => ({
                ...prevTotal,
                cursos: jsonCursos.metadata?.totalCount
            }));
        } catch (error) {
            console.error('Error fetching courses:', error);
        }

        // try {
        //     const res = await fetch('/api/analyses/master', {
        //         method: 'GET'
        //     })

        //     if (res.status === 200) {
        //         const data = await res.json()
        //         setAnalyticData(data)
        //     }
        // } catch (error) { }

        try {
            const resStudents = await fetch('/api/users/self/courses/students?page=1&per-page=1', { method: 'GET' });
            const jsonStudents = await resStudents.json();
            if (resStudents.status === 200) {
                setTotal({ ...total, loadingStudent: false })
            }
            setTotal((prevTotal) => ({
                ...prevTotal,
                student: jsonStudents.metadata?.totalCount
            }));
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
                total.loadingStudent ?
                <LoadingPage />
                :
                <>
                    <HeaderHogar total={total} />
                    <Layout variant="dashboard" className="flex flex-row w-full justify-between gap-6">
                        <LastSales />
                        <SalesStatistic />
                    </Layout>
                    <CursosPopular />
                </>
            }
        </div>
    );
}

export default HogarPage;