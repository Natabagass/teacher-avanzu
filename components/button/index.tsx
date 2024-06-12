const Button = ({
    variant,
    onClick,
    disable,
    className,
    children,
    size,
    type,
    color,
    padding
}: {
    variant?: string,
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
    disable?: boolean,
    color?: string,
    type: 'submit' | 'button',
    className?: string,
    size?: string,
    padding?: string
    children?: React.ReactNode
}) => {
    switch (variant) {
        case 'primary':
            return (
                <button
                    type={type}
                    disabled={disable}
                    onClick={onClick}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl ${color ? color : 'bg-neon-green-main'}  disabled:bg-opacity-30  text-base-black font-medium font-inter`}>
                    {children}
                </button>
            )
        case 'clear':
            return (
                <button
                    type={type}
                    disabled={disable}
                    onClick={onClick}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} font-medium font-inter`}>
                    {children}
                </button>
            )
        case 'secondary':
            return (
                <button
                    type={type}
                    disabled={disable}
                    onClick={onClick}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl border disabled:bg-opacity-30 border-white text-white`}>
                    {children}
                </button>
            )
        case 'secondary-subtle':
            return (
                <button
                    type={type}
                    disabled={disable}
                    onClick={onClick}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl disabled:bg-opacity-30 ${color ? color : 'bg-purple-300'}  text-white`}>
                    {children}
                </button>
            )
        case 'primary-white':
            return (
                <button
                    type={type}
                    disabled={disable}
                    onClick={onClick}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl disabled:bg-opacity-30 border border-white text-black bg-white`}>
                    {children}
                </button>
            )
    }
}

export default Button;