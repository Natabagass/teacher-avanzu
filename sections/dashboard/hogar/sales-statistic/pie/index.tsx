'use client'

import Text from "@components/text";
import { Chart as ChartJS, registerables } from 'chart.js';
import React, { PureComponent } from 'react';
import { Bar, Doughnut } from "react-chartjs-2";

const PieSalesStatistic = () => {
    ChartJS.register(...registerables);

    return (
        <div className="w-full h-full border border-stroke-primary rounded-2xl p-6 flex flex-col gap-6">
            <div className="w-full flex justify-center items-center h-[300px]">
                <Doughnut data={data} />
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row items-center w-full gap-2">
                        <div className="bg-neon-green-main rounded-full w-2 h-2" />
                        <Text size="p3" variant="subTitle" weight="font-normal">Ventas de cursos</Text>
                    </div>
                    <Text size="p3" variant="subTitle" weight="font-medium">{data.datasets[0].data[0]}%</Text>
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row items-center w-full gap-2">
                        <div className="bg-purple-blue-500 rounded-full w-2 h-2" />
                        <Text size="p3" variant="subTitle" weight="font-normal">Impresión</Text>
                    </div>
                    <Text size="p3" variant="subTitle" weight="font-medium">{data.datasets[0].data[1]}%</Text>
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row items-center w-full gap-2">
                        <div className="bg-orange-200 rounded-full w-2 h-2" />
                        <Text size="p3" variant="subTitle" weight="font-normal">Perfil de los visitantes</Text>
                    </div>
                    <Text size="p3" variant="subTitle" weight="font-medium">{data.datasets[0].data[2]}%</Text>
                </div>
            </div>
        </div>
    );
}

export default PieSalesStatistic;

export const data = {
    datasets: [
        {
            label: '',
            data: [40, 50, 20],
            backgroundColor: [
                'rgba(255, 130, 76, 1)',
                'rgba(139, 77, 255, 1)',
                'rgba(88, 199, 118, 1)',
            ],
            borderColor: [
                'rgba(255, 130, 76, 1)',
                'rgba(139, 77, 255, 1)',
                'rgba(88, 199, 118, 1)',
            ],
            borderWidth: 5,
        },
    ],
};