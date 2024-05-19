import Text from "@components/text";

const TableHeader = ({
    item,
    variant,
    className,
}: {
    item: string,
    variant?: "border" | 'no-border',
    className?: string
}) => {
    return (
        <th key={item} className={` ${variant === 'border' ? 'border-stroke-primary border' : ''} py-3 ${className} `}>
            <Text
                weight="font-medium"
                className="font-inter"
                size="cpt1"
                color="text-content-secondary">
                {item}
            </Text>
        </th>
    );
}

export default TableHeader;