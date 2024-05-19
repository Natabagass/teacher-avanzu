import Link from "next/link";

const Links = ({
    href,
    children,
    variant,
    className,
    size,
    padding,
}: {
    href: string,
    variant: string,
    children: React.ReactNode,
    className?: string,
    size?: string,
    padding?: string
}) => {
    switch (variant) {
        case 'primary':
            return (
                <Link
                    href={href}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl bg-neon-green-main  text-base-black font-medium font-inter`}
                >
                    {children}
                </Link>
            )
        case 'white':
            return (
                <Link
                    href={href}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl bg-white  text-base-black font-medium font-inter`}
                >
                    {children}
                </Link>
            )
        case 'secondary-subtle':
            return (
                <Link
                    href={href}
                    className={`${className} ${size} ${padding ? padding : 'px-4 py-2'} rounded-3xl flex w-full justify-center bg-purple-300 text-white`}
                >
                    {children}
                </Link>
            )
    }
}

export default Links;