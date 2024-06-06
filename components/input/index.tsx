import Text from "@components/text";
import { SetStateAction } from "react";
import { DeepMap, FieldError, FieldValue, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { z } from "zod";

const defaultSetShow: React.Dispatch<React.SetStateAction<boolean>> = () => { };

const Input = ({
    variant,
    label,
    disable,
    name,
    show,
    readOnly,
    setShow = defaultSetShow,
    className,
    padding,
    labelStyle,
    checked,
    placeholder,
    max,
    value,
    defaultValue,
    type,
    colorLabel,
    validationSchema,
    required,
    icon,
    register,
    error,
    color,
    leftIcon,
    hide,
    ...restProps
}: InputProps<any>) => {
    switch (variant) {
        case 'textarea':
            return (
                <div className="flex w-full flex-col">
                    <Text
                        size="p3"
                        variant="label"
                        weight="font-normal"
                        color="text-content-secondary"
                        className={`${hide ? 'hide' : ''} ${labelStyle}`}
                    >
                        {label}
                    </Text>
                    <div className="w-full relative mt-2">
                        <textarea
                            className={`${className} ${color ? color : 'bg-purple-100'} ${error?.[name] || error?.root?.[name] ? 'border-red-300' : 'border-stroke-primary'} h-[150px] pl-4 pr-10 placeholder:text-sm bg-purple-100 outline-none py-3 text-white border w-full rounded-3xl`}
                            placeholder={placeholder}
                            readOnly={readOnly}
                            maxLength={max}
                            disabled={disable}
                            {...register(name, {
                                required: required,
                                validate: validationSchema
                                ? (value) => validationSchema.safeParse(value).success
                                : undefined,
                                valueAsNumber: type === 'number' ? true : false
                            })}
                            defaultValue={defaultValue}
                            {...restProps}
                        />
                    </div>
                    <div className="flex flex-col">
                        {
                            (error?.root || error?.[name]) && (
                                <Text
                                    weight="font-medium"
                                    className="mt-2"
                                    color={`text-left text-red-300`}
                                    size={`p3`}
                                >
                                    {error?.root ?
                                        error?.root[name]
                                        : (type === 'number' ?
                                            `${name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' ')} is required`
                                            : error?.[name].message)}
                                </Text>
                            )
                        }
                    </div>
                </div>
            )
        case 'password':
            return (
                <div className="flex w-full flex-col">
                    <Text
                        size="p3"
                        variant="label"
                        weight="font-normal"
                        color="text-content-secondary"
                        className={`${hide ? 'hide' : ''} ${labelStyle}`}
                    >
                        {label}
                    </Text>
                    <div className="w-full relative mt-2">
                        <input
                            type={`${show ? 'text' : 'password'}`}
                            className={`${className} ${leftIcon ? 'pl-12' : 'pl-4'} ${error?.[name] || error?.root?.[name] ? 'border-red-300' : 'border-stroke-primary'} pr-10 placeholder:text-sm bg-purple-100 outline-none ${padding ? padding : 'px-6 py-3'} text-white border w-full rounded-3xl`}
                            placeholder={placeholder}
                            id={name}
                            readOnly={readOnly}
                            {...register(name, {
                                required: required,
                                validate: validationSchema
                                ? (value) => validationSchema.safeParse(value).success
                                : undefined,
                                valueAsNumber: type === 'number' ? true : false
                            })}
                            disabled={disable}
                            value={defaultValue}
                            defaultValue={defaultValue}
                            {...restProps}
                        />
                        {
                            leftIcon &&
                            <span className='absolute left-4 inset-y-3.5'>{icon}</span>
                        }
                        <button type='button' onClick={() => setShow(!show)} className='absolute right-5 inset-y-4'>
                            {
                                show ?
                                    <BsEye className="text-lg text-white" />
                                    :
                                    <BsEyeSlash className="text-lg text-white" />
                            }
                        </button>
                    </div>
                    <div className="flex flex-col">
                        {
                            (error?.root || error?.[name]) && (
                                <Text
                                    weight="font-medium"
                                    className="mt-2"
                                    color={`text-left text-red-300`}
                                    size={`p3`}
                                >
                                    {error?.root ?
                                        error?.root[name]
                                        : (type === 'number' && error?.root || error?.[name] ?
                                            `Se requiere ${name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' ')}`
                                            : error?.[name]?.message)}
                                </Text>
                            )
                        }
                    </div>
                </div>
            )
        default:
            return (
                <div className="flex w-full flex-col">
                    <Text
                        size="p3"
                        variant="label"
                        weight="font-normal"
                        color="text-content-secondary"
                        className={`${hide ? 'hide' : ''} ${labelStyle}`}
                    >
                        {label}
                    </Text>
                    <div className={`${label ? 'mt-2' : 'mt-0'} w-full relative `}>
                        <input
                            autoComplete=""
                            type={type}
                            id={name}
                            readOnly={readOnly}
                            {...register(name, {
                                required: required,
                                validate: validationSchema
                                    ? (value) => validationSchema.safeParse(value).success
                                    : undefined,
                                valueAsNumber: type === 'number' ? true : false
                            })}
                            className={`${className} ${leftIcon ? 'pl-12' : 'pl-4'} ${error?.[name] || error?.root?.[name] ? 'border-red-300' : 'border-stroke-primary'} ${color ? color : 'bg-purple-100'} outline-none ${padding ? padding : 'px-6 py-3'} placeholder:text-sm text-white border w-full rounded-3xl`}
                            placeholder={placeholder}
                            disabled={disable}
                            // defaultValue={defaultValue}
                            value={defaultValue}
                            {...restProps}
                        />
                        {
                            leftIcon &&
                            <span className='absolute left-4 inset-y-3.5'>{icon}</span>
                        }
                    </div>
                    <div className="flex flex-col">
                        {
                            (error?.root || error?.[name] || error) && (
                                <Text
                                    weight="font-medium"
                                    className="mt-2"
                                    color={`text-left text-red-300`}
                                    size={`p3`}
                                >
                                    {error?.root ?
                                        error?.root[name]
                                        : (type === 'number' && error?.root || error?.[name] ?
                                            `Se requiere ${name.charAt(0).toUpperCase() + name.slice(1).replaceAll('_', ' ')}`
                                            : error?.[name]?.message)}
                                </Text>
                            )
                        }
                    </div>
                </div>
            )
    }
}

export default Input;

type InputProps<T extends FieldValues> = {
    variant?: string,
    className?: string,
    name: string,
    defaultValue?: string,
    labelStyle?: string,
    show?: boolean,
    setShow?: React.Dispatch<SetStateAction<boolean>>,
    icon?: React.ReactNode,
    label?: string,
    type?: string,
    disable?: boolean,
    colorLabel?: string,
    checked?: boolean,
    required?: false,
    error?: DeepMap<T, FieldError>,
    register: UseFormRegister<T>,
    placeholder?: string,
    readOnly?: boolean,
    leftIcon: boolean,
    hide?: boolean,
    max?: number,
    color?: string,
    padding?: string,
    value?: string | number,
    restProps?: any;
    validationSchema?: z.ZodTypeAny;
}
