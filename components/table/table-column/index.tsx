const TableColumn = ({
    children,
    padding,
    className,
    variant
}: {
    children: React.ReactNode,
    padding?: string,
    className?: string,
    variant?: 'border' | 'no-border'
}) => {
    return (
        <td className={`${className} ${padding ? padding : 'py-4 px-4'} ${variant === 'border' ? 'border-stroke-primary border' : 'border-b border-stroke-primary'} `}>
            {children}
        </td>
    );
}

export default TableColumn;