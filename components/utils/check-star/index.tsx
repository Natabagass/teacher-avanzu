import { TbStar, TbStarFilled } from "react-icons/tb";

const CheckStar = ({
    star,
    empty,
    size
}: {
    star: number,
    empty: boolean,
    size?: string
}) => {
    const stars: React.ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
        if (i < star) {
            stars.push(<TbStarFilled key={i} className={`${size ? size : 'text-lg'} mr-2 text-orange-ratings`} />);
        } else if (empty) {
            stars.push(<TbStar key={i} className={`${size ? size : 'text-lg'} mr-2 text-content-secondary`} />);
        }
    }

    return <>{stars}</>;
}

export default CheckStar;