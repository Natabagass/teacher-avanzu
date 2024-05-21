const Text = ({
    variant,
    className,
    children,
    weight,
    size,
    color,
    htmlFor
}: {
    variant?: string,
    className?: string,
    htmlFor?: string,
    children: React.ReactNode,
    weight: 'font-base' | 'font-normal' | 'font-bold' | 'font-semibold' | 'font-medium',
    color?: string,
    size: string
}) => {
    switch (variant) {
        case 'subTitle-sub':
            return (
                <h3 className={`${className} ${size} ${color ? color : 'text-white'} ${weight ? weight : 'font-normal'}`}>
                    {children}
                </h3>
            )
        case 'title':
            return (
                <h1 className={`${className} ${size} ${color ? color : 'text-white'} ${weight ? weight : 'font-normal'}`}>
                    {children}
                </h1>
            )
        case 'subTitle':
            return (
                <h2 className={`${className} ${size} ${color ? color : 'text-white'} ${weight ? weight : 'font-normal'}`}>
                    {children}
                </h2>
            )
        case 'paragraph':
            return (
                <p className={`${className} ${size} ${color ? color : 'text-white'} ${weight ? weight : 'font-normal'}`}>
                    {children}
                </p>
            )
        case 'label':
            return (
                <label htmlFor={htmlFor} className={`${className} ${size} ${color ? color : 'text-white'} ${weight ? weight : 'font-normal'}`}>
                    {children}
                </label>
            )
        default:
            return (
                <h4 className={`${className} ${size} ${color ? color : 'text-white'} ${weight ? weight : 'font-normal'}`}>
                    {children}
                </h4>
            )
    }
}

export default Text;