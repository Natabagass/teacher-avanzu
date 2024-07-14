"use client";

import { signOut, useSession } from "next-auth/react";
import { useContext, useEffect, useState, createContext } from "react";

export const UserContext = createContext({
    userInfo: {
        email: "",
        profilePicture: "",
        backgroundPicture: "",
        name: "",
        code: 0,
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
        code: 0,
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

    const fetchWithRetry = async (url: string, retries = 3) => {
        for (let i = 0; i < retries; i++) {
            try {
                const res = await fetch(url);
                if (res.status !== 200) {
                    await signOut({
                        redirect: true,
                        callbackUrl: '/'
                    });
                }
                return await res.json();
            } catch (error) {
                if (i < retries - 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } else {
                    await signOut({
                        redirect: true,
                        callbackUrl: '/'
                    });
                }
            }
        }
    };

    const dataUser = async () => {
        try {
            const data = await fetchWithRetry('/api/users/me');

            if (data) {
                setUserInfo(data)
            } else {
                await signOut({
                    redirect: true,
                    callbackUrl: '/'
                });
            }
        } catch (error) {
            await signOut({
                redirect: true,
                callbackUrl: '/'
            });
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
