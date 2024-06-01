import { API_KEY, FILES } from "@utils/endpoint";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const submitFile = async (token: string, formData: FormData, setLoading: Dispatch<SetStateAction<boolean>>) => {
    try {
        setLoading(true)
        const res = await axios.post(`${API_KEY + FILES}`, { file: formData.get('file') }, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
                "Accept": "multipart/form-data"
            }
        });

        if (res.status === 200) {
            const datas = res.data;
            setLoading(false)
        }
        return res.data;
    } catch (error) {
        console.error('Error:', error);
    }
}
