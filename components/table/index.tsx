import React from "react";

const Table = ({
    header,
    columns,
    variant,
}: {
    header: React.ReactNode,
    columns?: React.ReactNode,
    variant?: "border" | 'no-border' | ""
}) => {
    return (
        <div className={`${variant === 'border' ? 'border-stroke-primary border rounded-3xl' : 'rounded-t-xl'} w-full overflow-auto bg-base-dark z-50 max-h-full `}>
            <table className="w-full relative h-full overflow-y-auto">
                <thead className={`${variant === 'border' ? 'border-stroke-primary border' : ''} z-20 sticky top-0 bg-purple-100`}>
                    {header}
                </thead>
                <tbody className='min-h-fit max-h-full w-full overflow-y-auto '>
                    {columns}
                </tbody>
            </table>
        </div>
    );
}

export default Table;