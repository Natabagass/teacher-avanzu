'use client'

import Text from "@components/text";
import RevisionList from "../list";
import FilterRevision from "../filter";
import Layout from "@layout/main-layout";
import { useEffect, useState } from "react";
import { ReviewsTypes, ReviewsValue } from "data/types/interface/reviews";

const RevisionCalificacionesPage = () => {
    const [data, setData] = useState<ReviewsTypes>(ReviewsValue)
    const [filteredData, setFilteredData] = useState<ReviewsTypes>(data);
    const [currentPage, setCurrentPage] = useState(1);

    const [urls, setUrls] = useState({
        self: `/api/users/self/courses/reviews?page=1&per-page=10`,
        first: '',
        previous: '',
        next: '',
        last: ''
    });

    const handlePageClick = ({ selected }: { selected: number }) => {
        let newPage = selected + 1;
        let newUrl = `/api/bookmarks?${newPage}&per-page=6`;

        if (selected + 1 > currentPage && urls.next) {
            newUrl = urls.next;
        } else if (selected + 1 < currentPage && urls.previous) {
            newUrl = urls.previous;
        }

        setUrls(prevUrls => ({
            ...prevUrls,
            self: newUrl
        }));
        setCurrentPage(newPage);
    };

    const datas = async (url: string) => {
        const rs = await fetch(url)
        const data = await rs.json()
        if (rs.status === 200) {
            setData(data)
        }
    }

    useEffect(() => {
        datas(urls.self);
    }, [urls.self]);

    return (
        <>
            <Layout variant="content-dashboard" className="flex flex-col gap-6">
                <Text color="text-white" weight="font-semibold" size="h3" variant="title">Revisión y calificaciones</Text>

                <FilterRevision filteredData={filteredData} dataResponse={data} setFilteredData={setFilteredData} />
                <RevisionList
                    data={data}
                    handlePageClick={handlePageClick}
                />
            </Layout>
        </>
    );
}

export default RevisionCalificacionesPage;