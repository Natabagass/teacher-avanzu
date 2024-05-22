"use client";

import { signOut, useSession } from "next-auth/react";
import { useContext, useEffect, useState, createContext } from "react";

export const UserContext = createContext({
    userInfo: {
        email: "",
        profilePicture: "",
        backgroundPicture: "",
        name: "",
        firstName: "",
        lastName: "",
        displayName: "",
        phoneNumber: "",
        occupation: "",
        biography: "",
        type: "",
        credential: "",
        errors: {
            message: ""
        }
    },
});

export const ProfileUserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        profilePicture: "",
        backgroundPicture: "",
        name: "",
        firstName: "",
        lastName: "",
        displayName: "",
        phoneNumber: "",
        occupation: "",
        biography: "",
        type: "",
        credential: "",
        errors: {
            message: ""
        }
    });

    const { data: user } = useSession()
    console.log(user)

    const dataUser = async () => {
        try {
            const res = await fetch('/api/users/me', {
                method: 'GET',
                next: {
                    revalidate: 300
                }
            },)
            const data = await res.json()
            if (res.status === 404) {
                await signOut({
                    redirect: true,
                    callbackUrl: '/'
                })
            }
            setUserInfo(data);
        } catch (error) {
            await signOut({
                redirect: true,
                callbackUrl: '/'
            })
        }
    };

    useEffect(() => {
        if (user?.user.token) {
            dataUser();
        }
    }, [user?.user.token]);

    return (
        <UserContext.Provider value={{ userInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useProfile must be used within a ProfileUserProvider');
    }
    return context;
};
