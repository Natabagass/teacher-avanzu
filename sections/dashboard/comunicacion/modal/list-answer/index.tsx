import ImageBlur from "@components/dynamic-blur";
import Input from "@components/input";
import LoadingPage from "@components/loading";
import Text from "@components/text";
import { URL_DUMMY_IMAGE } from "@utils/endpoint";
import { AnswerQuestionTypes, AnswerQuestionValues } from "data/types/interface/answer-question";
import { QNAItem } from "data/types/interface/course/qna";
import dayjs from "dayjs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface State {
    [key: number]: boolean;
}

const ListAnswerCommunication = ({
    state,
    setState,
    setRefresh
}: {
    state: { page: number, open: boolean, condition: boolean, answer: boolean, item: QNAItem },
    setRefresh: Dispatch<SetStateAction<boolean>>,
    setState: Dispatch<SetStateAction<{ page: number, open: boolean, answer: boolean, condition: boolean, item: QNAItem }>>,
}) => {
    const [data, setData] = useState<AnswerQuestionTypes>(AnswerQuestionValues)
    const [currentPage, setCurrentPage] = useState(1);
    const [refreshAnswer, setRefreshAnswer] = useState(true)
    const [urls, setUrls] = useState({
        self: `/api/course-questions/${state.item.ID}/course-question-answers?page=1&per-page=10`,
        first: '',
        previous: '',
        next: '',
        last: ''
    });

    const { register, formState: { errors } } = useForm()

    const handlePageClick = ({ selected }: { selected: number }) => {
        let newPage = selected + 1;
        let newUrl = `/api/course-questions/${state.item.ID}/course-question-answers?page=${newPage}&per-page=10`;

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
            setRefreshAnswer(false)
        }
    }

    useEffect(() => {
        if (refreshAnswer) {
            datas(urls.self);
        }
    }, [urls.self, refreshAnswer]);

    console.log(data)

    return (
        <>
            <div className="w-full bg-purple-200 rounded-xl border items-center border-stroke-primary p-6 flex flex-col gap-4">
                {
                    data.metadata.page !== 0 ?
                        <div className="flex flex-col w-full gap-3">
                            <div className="max-h-[600px] overflow-auto">
                                <div className="w-full">
                                    <div className="gap-2 flex flex-col mb-6">
                                        <div className="flex flex-row w-full justify-between">
                                            <div className="flex flex-row items-center w-full gap-2">
                                                <div className="h-8 w-8 relative border border-stroke-primary rounded-full">
                                                    <ImageBlur src={state.item.userProfilePicture || `${URL_DUMMY_IMAGE}?name=${state.item.userDisplayName}&size=120`} alt="Profile Picture - (Avanzu)" fill className="object-cover object-center rounded-full" />
                                                </div>
                                                <Text size="p2" weight="font-normal">{state.item.userDisplayName}</Text>
                                                <span className="text-content-secondary">
                                                    &#x2022;
                                                </span>
                                                <Text size="p2" weight="font-normal" color="text-content-secondary">
                                                    {dayjs(state.item.createdAt, 'DD/MM/YYYY').format('DD MMM YYYY') || '-'}
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer flex-row w-full justify-between">
                                            <Text size="p2" weight="font-normal" variant="subTitle-sub">{state.item.question}</Text>
                                        </div>
                                        <div className={`flex flex-col px-7 gap-4 mt-3`}>
                                            {
                                                data.records.map((sub) => (
                                                    <div className="flex flex-col w-full gap-1" key={sub.ID}>
                                                        <div className="w-full flex flex-row items-center justify-between">
                                                            <div className="flex items-center flex-row w-full gap-2">
                                                                <div className="h-4 w-4 relative border border-stroke-primary rounded-full">
                                                                    <ImageBlur src={`${URL_DUMMY_IMAGE}?name=${state.item.userDisplayName}&size=120`} alt="Profile Picture - (Avanzu)" fill className="object-cover object-center rounded-full" />
                                                                </div>
                                                                <Text size="p2" variant="subTitle-sub" weight="font-normal">{sub.answerBy}</Text>
                                                                <span className="text-content-secondary">
                                                                    &#x2022;
                                                                </span>
                                                                <Text size="p2" weight="font-normal" variant="subTitle-sub" color="text-content-secondary">
                                                                    {dayjs(sub.createdAt, 'DD/MM/YYYY').format('DD MMM YYYY') || '-'}
                                                                </Text>
                                                            </div>
                                                        </div>
                                                        <Text size="p2" weight="font-normal">{sub.answer}</Text>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <LoadingPage />
                }
            </div>
        </>
    );
}

export default ListAnswerCommunication;