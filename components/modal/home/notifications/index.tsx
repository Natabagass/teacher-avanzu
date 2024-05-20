'use client'

import Button from "@components/button";
import Modal from "@components/modal/modal-main";
import Text from "@components/text";
import { SetStateAction, useEffect, useState } from "react";
import { TbBook, TbFileDescription, TbQuestionMark } from "react-icons/tb";

interface Props {
    id: number,
    title: string,
    message: string,
    read: true,
    timestamp: Date
}

const ModalNotification = ({
    open,
    setOpen
}: {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<{ open: boolean, isScrolled: boolean, profile: boolean, cart: boolean }>>
}) => {
    const [dataNotif, setDataNotif] = useState<Props[]>([])
    let dataKeys = Object.keys(dataNotif)
    const NotificationIcons = [TbQuestionMark, TbBook, TbFileDescription];
    const RandomNotificationIcon = () => {
        const randomIndex = Math.floor(Math.random() * NotificationIcons.length);
        const RandomIcon = NotificationIcons[randomIndex];
        return <RandomIcon className="text-2xl text-white" />;
    };
    const firstChars = ['Today', 'Yesterday'];

    const data = async () => {
        const res = await fetch('/api/notifications', {
            method: 'GET',
            next: {
                revalidate: 3000
            }
        })
        const data = await res.json()

        if (res.status === 200) {
            setDataNotif(data)
        }
    }

    useEffect(() => {
        data()
    }, [])

    const currentTimestamp = new Date().getDate();

    return (
        <>
            <Modal
                open={open}
                onClick={() => { }}
                onOutsideClick={() => {
                    setOpen(prevState => ({
                        ...prevState,
                        open: false
                    }))
                }}
                className="max-w-[400px] transform  overflow-y-auto max-h-[530px]"
                position="-translate-x-32 translate-y-36"
                title="Notifications"
                placement="absolute"
            >
                <div className="w-full flex flex-col">
                    {
                        dataKeys.length > 0 ?
                            <div className="w-full px-4 flex flex-col">
                                {firstChars.map((days) => {
                                    let day = '';
                                    const notificationsForDay = dataKeys.filter((item: any) => {
                                        const dateNow = new Date(dataNotif[item].timestamp);
                                        if (item !== 'code') {
                                            if (dateNow.getDate() === currentTimestamp) {
                                                day = 'Today';
                                            } else {
                                                day = 'Yesterday';
                                            }
                                            return day === days;
                                        }
                                    });

                                    if ((day === 'Today' || day === 'Yesterday') && notificationsForDay.length === 0) {
                                        return null;
                                    }

                                    return (
                                        <>
                                            <Text key={days} className="mt-4" weight="font-semibold" size="p1" color="text-white">
                                                {days}
                                            </Text>
                                            {notificationsForDay.map((item: any) => (
                                                <div key={dataNotif[item].id} className="w-full px-4 flex mt-4 flex-col">
                                                    <div className="flex flex-col w-full gap-2 mt-3">
                                                        <div className="flex flex-row items-center gap-3 w-full justify-between">
                                                            <div className="flex flex-row items-center gap-4">
                                                                <div className="rounded-full p-3 bg-purple-blue-500">
                                                                    <RandomNotificationIcon />
                                                                </div>
                                                                <div className="flex flex-wrap flex-col gap-1">
                                                                    <Text color={`${!dataNotif[item].read ? 'text-white' : 'text-content-secondary'}`} size="p2" weight="font-semibold" variant="subTitle">{dataNotif[item].title}</Text>
                                                                    <Text color={`${!dataNotif[item].read ? 'text-content-secondary' : 'text-content-tertiary'}`} size="p3" weight="font-normal" variant="paragraph">{dataNotif[item].message}</Text>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {!dataNotif[item].read &&
                                                                    <div className="bg-red-300 rounded-full w-2 h-2" />
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-border bg-content-secondary" />
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    );
                                })}

                            </div>
                            :
                            <div className="w-full px-4 mt-4">
                                <Text size="p2" weight="font-semibold">La notificación todavía está vacía</Text>
                            </div>
                    }
                    <div className="sticky bottom-0 h-full items-end left-0 right-0 bg-purple-50 z-10">
                        <Button padding="p-4" type="button" size="btn2" variant="clear">
                            <Text size="p3" weight="font-medium" color="text-neon-green-500">Marcar Todo Como LeÍdo</Text>
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalNotification;