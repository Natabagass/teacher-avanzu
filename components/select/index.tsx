import Text from "@components/text";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Select = ({
    label,
    labelStyle,
    hide,
    color,
    value,
    disable,
    children,
    className,
    onChange,
    leftIcon,
    defaultValue
}: {
    label?: string,
    color?: string,
    leftIcon?: string,
    labelStyle?: string,
    disable?: boolean,
    hide?: boolean,
    defaultValue?: any,
    onChange: () => void,
    value?: any,
    children: React.ReactNode,
    className?: string,
}) => {
    return (
        <div className="flex flex-col w-full">
            <Text
                size="p3"
                variant="label"
                weight="font-normal"
                color="text-content-secondary"
                className={`${hide ? 'hide' : ''} ${labelStyle}`}
            >
                {label}
            </Text>
            <Listbox value={value} onChange={onChange} disabled={disable}>
                <Listbox.Button
                    className={`px-6 py-3 flex items-center gap-4 ${color ? color : 'bg-purple-100'} text-white rounded-3xl border border-stroke-primary mt-2 text-left relative w-full cursor-default ${className}`}
                >
                    <span className='block text-sm truncate'>{value ? value : defaultValue}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
                        <MdKeyboardArrowDown
                            className='text-xl text-white'
                        />
                    </span>
                </Listbox.Button>
                <div className='relative mt-1'>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className={`absolute z-[100] mt-2 px-4 py-3 min-h-fit h-fit max-h-60 text-content-secondary ${color ? color : 'bg-purple-100'} border border-stroke-primary w-full overflow-y-auto rounded-3xl focus:outline-none sm:text-sm`}>
                            {children}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

export default Select;