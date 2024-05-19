'use client'
import ModalContainer from '@components/modal/modal-container';
import React, { createContext, useContext, useState, useEffect, SetStateAction } from 'react';

export type Modal = {
    title?: string;
    subTitle?: string;
    href?: string;
    back?: string;
    outsideClick?: () => void,
    type: 'success' | 'fail' | 'pending' | 'info' | 'success-notif' | 'balance' | 'loading' | 'save' | 'function' | '';
    data?: {},
    placement: 'center' | 'absolute' | '';
    variant?: '';
    function?: () => void;
    button1?: string;
    button2?: string;
    desc?: string;
};

type ModalContextType = {
    modal: Modal;
    setModal: React.Dispatch<React.SetStateAction<Modal>>;
};

export const ModalContext = createContext<ModalContextType>({
    modal: { title: '', subTitle: '', button1: '', button2: '', type: '', data: {}, variant: '', placement: '', desc: '', back: '', function: () => { }, outsideClick: () => { } },
    setModal: () => { },
});

export const ModalProvider = ({ children }: { children: React.ReactNode}) => {
    const [modal, setModal] = useState<Modal>({ title: '', button1: '', button2: '', subTitle: '', type: '', desc: '', placement: '', href: '', variant: '', back: '', data: {}, function: () => { }, outsideClick: () => { }, });

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            <ModalContainer modal={modal} />
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
