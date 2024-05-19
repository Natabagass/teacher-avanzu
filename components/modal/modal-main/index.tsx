import Text from '@components/text';
import { Dialog, Transition } from '@headlessui/react';
import { Case, Switch } from '@hooks/conditional-render/switch';
import { MdOutlineClose } from 'react-icons/md';

const Modal = ({
    onClick,
    open,
    placement,
    variant,
    title,
    backdrop = true,
    type,
    background,
    children,
    isLoading,
    onOutsideClick,
    className,
    position,
    color,
    width
}: {
    open: boolean;
    title?: string;
    backdrop?: boolean;
    onClick: () => void;
    variant?: string;
    className?: string;
    background?: boolean;
    position?: string;
    button1?: string;
    button2?: string;
    color?: string;
    onOutsideClick?: () => void;
    type?: string;
    placement?: 'center' | 'absolute' | '';
    children?: React.ReactNode;
    width?: string;
    isLoading?: boolean;
}) => {
    return (
        <Transition appear show={open} as={'div'}>
            <Dialog
                as='div'
                className='fixed inset-0 overflow-y-auto z-[100]'
                onClose={onClick}
            >
                {
                    backdrop &&
                    <Transition.Child
                        as='div'
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-x-full'
                        enterTo='opacity-100 translate-x-0'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-x-0'
                        leaveTo='opacity-0 translate-x-full'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-50' />
                    </Transition.Child>
                }
                <Switch>
                    <Case condition={placement === 'center'}>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as='div'
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className={`${className} ${color ? color : 'bg-purple-50'} ${width ? width : 'max-w-xl'} w-full transform overflow-hidden ${background ? '' : 'p-4'} rounded-2xl border border-stroke-primary text-left align-middle shadow-xl transition-all`}>
                                    <div className={`flex w-full flex-row ${background ? 'px-4 pt-4' : ''} justify-between items-center gap-4`}>
                                        <Text size='h4' color='text-white' weight='font-semibold'>{title && title}</Text>
                                        <span
                                            className={`${onOutsideClick ? 'flex' : 'hidden'} p-1 cursor-pointer`}
                                            onClick={onOutsideClick}
                                        >
                                            {
                                                isLoading ?
                                                    ''
                                                    :
                                                    <MdOutlineClose className='text-white text-xl' />
                                            }
                                        </span>
                                    </div>
                                    <div className='mt-4 w-full'>
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Case>
                    <Case condition={placement === 'absolute'}>
                        <div className={`${position} flex w-full justify-end text-center`}>
                            <Transition.Child
                                as='div'
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className={`${className} ${color ? color : 'bg-purple-50'} w-full rounded-2xl border border-stroke-primary bg-purple-50 text-left align-middle shadow-xl transition-all`}>
                                    <div className='flex w-full flex-row justify-between px-4 pt-4 items-center gap-4'>
                                        <Text size='h4' color='text-white' weight='font-semibold'>{title && title}</Text>
                                        <span
                                            className={`${onOutsideClick ? 'flex' : 'hidden'} p-1 cursor-pointer`}
                                            onClick={onOutsideClick}
                                        >
                                            {
                                                isLoading ?
                                                    ''
                                                    :
                                                    <MdOutlineClose className='text-white text-xl' />
                                            }
                                        </span>
                                    </div>
                                    <div className='mt-4'>
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Case>
                    <Case condition={type === 'course'}>
                        <div className={`w-full flex items-center h-full justify-center text-center`}>
                            <Transition.Child
                                as='div'
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className={`${className} ${width ? width : 'max-w-xl'} ${color ? color : 'bg-purple-50'} w-full  h-[750px] overflow-y-auto transform rounded-2xl border border-stroke-primary text-left align-middle shadow-xl transition-all`}>
                                    <div className=' w-full'>
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Case>
                </Switch>
            </Dialog>
        </Transition>
    );
}

export default Modal;