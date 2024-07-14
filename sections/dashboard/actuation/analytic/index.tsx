'use client'

import Button from "@components/button";
import Select from "@components/select";
import Text from "@components/text";
import { Listbox } from "@headlessui/react";
import Layout from "@layout/main-layout";
import { AnalyticData } from "data/types/interface/analytic-data";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TbDownload } from "react-icons/tb";
import AnalyticBar from "./bar";

const UserAnalytic = ({ data, loading }: { data?: AnalyticData, loading: boolean }) => {
    const [id, setId] = useState(0)

    return (
        <Layout variant="dashboard" className="flex flex-col w-full gap-6">
            {/* <HeaderUserAnalytic setId={setId} /> */}
            <AnalyticBar loading={loading} analyticData={data} id={id} />
        </Layout>
    );
}

export default UserAnalytic;