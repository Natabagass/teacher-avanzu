import Text from "@components/text";
import { SetStateAction } from "react";
import { IconType } from "react-icons";

const CursosTag = ({
    select,
    setSelect,
    name,
    Icon
}: {
    select: string,
    setSelect: React.Dispatch<SetStateAction<string>>,
    name: string,
    Icon: IconType | string
}) => {
    const toggle = (name: string) => {
        setSelect(name);
    };

    return ( 
        <div onClick={() => toggle(name)} className={`${select === name ? 'bg-neon-green-main' : 'bg-purple-100 '} flex items-center flex-row gap-3 py-2 px-4 rounded-3xl`}>
        {
            name !== 'All' &&
            <Icon className={`${select === name ? 'text-purple-50' : 'text-white'} `} />
        }
        <Text variant="subTitle" size='p3' color={`${select === name ? 'text-purple-50' : 'text-white'} `} weight='font-medium'>{name}</Text>
    </div>
     );
}
 
export default CursosTag;