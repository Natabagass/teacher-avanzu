'use client'

import Text from "@components/text";
import CheckStar from "@components/utils/check-star";
import Button from "@components/button";
import dayjs from "dayjs";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { LuMaximize } from "react-icons/lu";
import { DetailCourseTypes } from "data/types/interface/course/detail";
import { ReviewsTypes } from "data/types/interface/reviews";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";

type Ratings = {
    ratingOf5s: number;
    ratingOf4s: number;
    ratingOf3s: number;
    ratingOf2s: number;
    ratingOf1s: number;
};

const ResenasList = ({
    item,
    reviews,
    handlePageClick
}: {
    item: DetailCourseTypes,
    reviews: ReviewsTypes,
    handlePageClick: () => void
}) => {
    console.log(reviews.records)
    const ratings = {
        ratingOf5s: item.ratingOf5s || 0,
        ratingOf4s: item.ratingOf4s || 0,
        ratingOf3s: item.ratingOf3s || 0,
        ratingOf2s: item.ratingOf2s || 0,
        ratingOf1s: item.ratingOf1s || 0,
    };

    const calculateRatingPercentages = (ratings: Ratings) => {
        const totalRatings = Object.values(ratings).reduce((acc, rating) => acc + rating, 0);
        if (totalRatings === 0) return { ratingOf5s: 0, ratingOf4s: 0, ratingOf3s: 0, ratingOf2s: 0, ratingOf1s: 0 };

        return {
            ratingOf5s: (ratings.ratingOf5s / totalRatings) * 100,
            ratingOf4s: (ratings.ratingOf4s / totalRatings) * 100,
            ratingOf3s: (ratings.ratingOf3s / totalRatings) * 100,
            ratingOf2s: (ratings.ratingOf2s / totalRatings) * 100,
            ratingOf1s: (ratings.ratingOf1s / totalRatings) * 100,
        };
    };

    const percentages = calculateRatingPercentages(ratings);

    return (
        <div className="flex flex-row gap-4 mt-4 w-full">
            <div className="flex flex-col gap-3 w-full">
                {
                    reviews.records.length > 1 ?
                        reviews.records.map((data, index) => (
                            <div key={index} className="rounded-xl border border-stroke-primary p-4">
                                <div className="flex flex-col w-full gap-2">
                                    <div className="flex flex-row w-full mb-2 justify-between">
                                        <div className="flex flex-row w-full gap-2">
                                            <div className="flex flex-row items-center gap-2">
                                                <div className="relative h-6 w-6">
                                                    <Image src={`${URL_DUMMY_IMAGE}?name=user&size=120`} alt="Author Profile - (Avanzu)" fill className="rounded-full object-cover object-center" />
                                                </div>
                                                <Text size="p2" weight="font-medium" color="text-white">{data.username}</Text>
                                            </div>
                                            <span className="text-content-secondary">
                                                &#x2022;
                                            </span>
                                            <Text size="p2" weight="font-normal" color="text-content-secondary">
                                                {dayjs(data.commentedAt, 'DD/MM/YYYY').format('DD MMM YY') || '-'}
                                            </Text>
                                        </div>
                                        {/* <LuMaximize className="text-white" /> */}
                                    </div>
                                    <Text size="p2" weight="font-normal" variant="paragraph">{data.message}</Text>
                                    <div className="flex flex-row mt-2">
                                        <CheckStar star={data.rating || 0} empty={true} size="text-xl" />
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <div className="w-full flex justify-center items-center h-full">
                            <Text size="h1" weight="font-semibold">No Reviews</Text>
                        </div>
                }
                {
                    reviews.metadata.pageCount > 1 &&
                    <div className="flex justify-center">
                        <Button size="btn2" type="button" padding="px-6 py-4" variant="secondary-subtle">
                            Ver mos
                        </Button>
                    </div>
                }
            </div>
            <div className="flex flex-col border border-stroke-primary p-2 h-fit rounded-2xl w-[40%]">
                <div className="flex flex-col gap-2 items-center">
                    <Text size="p1" weight="font-semibold" variant="subTitle" color="text-purple-blue-500">Reseñas</Text>
                    <Text size="h2" weight="font-bold" variant="title">{item.rating || 0}</Text>
                    <div className="flex flex-row">
                        <CheckStar star={item.rating} empty={true} size="text-3xl" />
                    </div>
                    <Text size="p2" weight="font-normal" color="text-content-secondary">{item.reveiwsCount} Valoraciones</Text>
                    <div className="w-full h-border bg-content-tertiary" />
                    <div className="flex flex-col w-full gap-2 mt-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex flex-row relative gap-3 items-center w-full">
                                <Text size="p2" weight="font-medium">{star}</Text>
                                <div className="flex flex-col w-full">
                                    <div className="relative left-0 h-2 w-full bg-purple-200 rounded-3xl" />
                                    <div
                                        style={{ width: `${percentages[`ratingOf${star}s` as keyof Ratings]}%` }}
                                        className="relative bottom-0 rounded-3xl -mt-2 left-0 h-2 bg-neon-green-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResenasList;