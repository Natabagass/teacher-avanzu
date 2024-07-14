'use client'

import LoadingPage from "@components/loading";
import Text from "@components/text";
import { Chart as ChartJS, registerables } from 'chart.js';
import { randomInt } from "crypto";
import { AnalyticData } from "data/types/interface/analytic-data";
import React, { PureComponent, useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

const AnalyticBar = ({ id, analyticData, loading }: { id: number, analyticData?: AnalyticData, loading: boolean }) => {
    // const newUsersData = analyticData.userAnalytics.flatMap(item => item.months.map(sub => sub.newUsers));
    // const usersData = analyticData.userAnalytics.flatMap(item => item.months.map(sub => sub.removedUsers));
    // const totalNewUsers = newUsersData.reduce((acc, value) => acc + value, 0);
    // const totalUsers = usersData.reduce((acc, value) => acc + value, 0);

    // const allData = [...newUsersData, ...usersData];
    // const maxY = Math.max(...allData);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
                color: "#ABABAB",
            },
        },
        layout: { autoPadding: true },
    };


    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Nuevo usuario',
    //             data: analyticData.userAnalytics[id].months.map(item => item.newUsers),
    //             backgroundColor: '#C5F300',
    //         },
    //         {
    //             label: 'Cuenta cerrada',
    //             data: analyticData.userAnalytics[id].months.map(item => item.removedUsers),
    //             backgroundColor: '#F65244',
    //         },
    //     ],
    // };

    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Nuevo usuario',
                data: labels.map(() => getRandomInt(0, 100)),
                backgroundColor: '#C5F300',
            },
            {
                label: 'Cuenta cerrada',
                data: labels.map(() => getRandomInt(0, 100)),
                backgroundColor: '#F65244',
            },
        ],
    };

    return (
        <div className="w-full h-full border border-stroke-primary rounded-2xl p-6 flex flex-col gap-6">
            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex w-full h-full flex-row gap-6 justify-start">
                    <div className="flex flex-col gap-2">
                        <Text size="p2" variant="subTitle" color="text-content-secondary" weight="font-normal">Nuevo usuario</Text>
                        <Text size="h2" variant="title" weight="font-bold">{200} Users</Text>
                    </div>
                    <div className="w-[1px] h-full bg-stroke-primary" />
                    <div className="flex flex-col gap-2">
                        <Text size="p2" variant="subTitle" color="text-content-secondary" weight="font-normal">Cuenta cerrada</Text>
                        <Text size="h2" variant="title" weight="font-bold">{250} Users</Text>
                    </div>
                </div>
                <div className="flex w-full flex-row gap-4 justify-end items-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="bg-neon-green-main rounded-full w-4 h-4" />
                        <Text size="p2" variant="subTitle" color="text-content-secondary" weight="font-normal">Nuevo usuario</Text>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="bg-red-300 rounded-full w-4 h-4" />
                        <Text size="p2" variant="subTitle" color="text-content-secondary" weight="font-normal">Cuenta cerrada</Text>
                    </div>
                </div>
            </div>
            <div className="w-full h-[450px]">
                {
                    loading ?
                        <LoadingPage />
                        :
                        <Bar options={options} data={data} />
                }
            </div>
        </div>
    );
}

export default AnalyticBar;

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];