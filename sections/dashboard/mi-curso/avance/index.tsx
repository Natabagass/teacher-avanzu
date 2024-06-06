'use client'

import BackButton from "@components/button/back";
import CursosPreview from "@components/course/preview";
import LoadingPage from "@components/loading";
import Text from "@components/text";
import { DetailCourseTypes, DetailCourseValue } from "data/types/interface/course/detail";
import { ReviewsTypes, ReviewsValue } from "data/types/interface/reviews";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AvanceMiCursoPage = () => {
    const params = useParams()
    const [data, setData] = useState<DetailCourseTypes>(DetailCourseValue)
    const datas = async () => {
        const rs = await fetch(`/api/courses/${params.id}?with-metadata=true`)
        const data = await rs.json()
        if (rs.status === 200) {
            setData(data)
        }
    }

    useEffect(() => {
        datas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [current, setCurrent] = useState(1)
    const [reviews, setReviews] = useState<ReviewsTypes>(ReviewsValue)
    const [urls, setUrls] = useState({
        self: `/api/courses/${params.id}/reviews?page=1&per-page=3`,
        first: '',
        previous: '',
        next: '',
        last: ''
    });

    const handlePageClick = () => {
        let newPage = current + 1;
        let newUrl = `/api/courses/${params.id}/reviews?page=1&per-page=3`;

        if (current !== newPage) {
            newUrl = urls.next
        }

        setUrls(prevUrls => ({
            ...prevUrls,
            self: newUrl
        }));
        setCurrent(newPage);
    };

    const datasReview = async (url: string) => {
        const rs = await fetch(url)
        const data = await rs.json()
        if (rs.status === 200) {
            setReviews(data)
        }
    }

    useEffect(() => {
        datasReview(urls.self);
    }, [urls.self]);

    return (
        <div className="flex flex-col w-full">
            {
                data.title !== '' ?
                    <>
                        <div className="flex bg-purple-100 py-3 px-4 items-center flex-row w-full justify-between z-50">
                            <div>
                                <BackButton />
                            </div>
                            <div>
                                <Text size="p1" weight="font-medium" variant="title">Modo de vista previa</Text>
                            </div>
                            <div />
                        </div>
                        <div>
                            <CursosPreview
                                review={reviews}
                                handleClick={handlePageClick}
                                data={data}
                            />
                        </div>
                    </>
                    :
                    <LoadingPage />
            }
        </div>
    );
}

export default AvanceMiCursoPage;