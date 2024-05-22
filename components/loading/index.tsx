import { HiArrowPath } from "react-icons/hi2";

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-[50vh] animate-pulse">
            <div className="text-green-200 flex items-center">
                <h1 className="text-2xl mr-3">Cargando...</h1>
                <HiArrowPath className="w-6 h-6 animate-spin" />
            </div>
        </div>
    );
}

export default LoadingPage;
