
const Layout = ({
    className,
    variant,
    type,
    children
}: {
    className?: string,
    variant?: string,
    type?: string,
    children?: React.ReactNode
}) => {
    switch (variant) {
        case 'navbar':
            return (
                <nav className={`${className} px-25 py-5`}>
                    {children}
                </nav>
            )
        case 'footer':
            return (
                <footer className={`${className} px-25 py-17`}>
                    {children}
                </footer>
            )
        // case 'full-layout':
        //     return (
        //         <>
        //             <Navbar />
        //             {children}
        //             <Footer />
        //         </>
        //     )
        case 'content-dashboard':
            return (
                <div className={`${className} mx-12`}>
                    {children}
                </div>
            )
        case 'dashboard':
            return (
                <div className={`${className} px-8`}>
                    {children}
                </div>
            )
        default:
            return (
                <div className={`${className} px-25`}>
                    {children}
                </div>
            )
    }
}

export default Layout;