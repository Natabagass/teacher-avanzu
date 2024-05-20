import Text from '@components/text';
import { useState } from 'react';
import { Controller, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { z } from 'zod';

type Props<T extends FieldValues> = {
    error: FieldErrors;
    register: UseFormRegister<T>;
    color?: string,
    padding?: string,
    className?: string,
    leftIcon?: boolean,
    name: string,
    watch: any,
    label: string,
    resetField: any,
    placeholder?: string,
    labelStyle?: string,
    validationSchema?: z.ZodTypeAny,
    required?: false,
    hide?: boolean
};

const TagInput = ({
    className,
    leftIcon,
    label,
    labelStyle,
    hide,
    padding,
    resetField,
    color,
    error,
    placeholder,
    required,
    validationSchema,
    register,
    name,
    watch
}: Props<any>) => {
    const [tags, setTags] = useState<string[]>([]);
    const inputValue = watch(`${name}`)?.trim();
    const sanitizedValue = inputValue?.replace(/[#,]/g, '');
    const newTag = sanitizedValue;
    const combinedTagsLength = tags.map(tag => tag?.length).reduce((acc, cur) => acc + cur, 0);

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            if (sanitizedValue) {
                if (combinedTagsLength + newTag.length <= 20) {
                    setTags([...tags, newTag]);
                    resetField(`${name}`);
                }
            }
        }
    };

    const removeTag = (indexToRemove: number) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="w-full">
            <Text
                size="p3"
                variant="label"
                weight="font-normal"
                color="text-content-secondary"
                className={`${hide ? 'hide' : ''} ${labelStyle}`}
            >
                {label}
            </Text>
            <div className={`${tags.length > 0 ? 'p-1' : ''} flex flex-row items-center flex-wrap border border-stroke-primary rounded-3xl bg-purple-100 relative`}>
                {tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-purple-300 p-2 text-white rounded-full px-4 py-2 m-1 text-sm">
                        <span>{tag}</span>
                        <button
                            type="button"
                            className="ml-2 text-white"
                            onClick={() => removeTag(index)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
                <input
                    type="text"
                    placeholder={combinedTagsLength >= 20 ? 'Tu etiqueta está lleno' : 'Escribe tu etiqueta'}
                    className={`${className} ${leftIcon ? 'pl-12' : 'pl-4'} ${error?.[name] || error?.root?.[name] ? 'border-red-300' : 'border-stroke-primary'} ${color ? color : 'bg-purple-100'} outline-none ${padding ? padding : 'px-6 py-3'} placeholder:text-sm text-white flex-grow bg-transparent`}
                    {...register(name, {
                        required: required,
                        validate: validationSchema
                            ? (value) => validationSchema.safeParse(value).success
                            : undefined,
                    })}
                    disabled={combinedTagsLength >= 20}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default TagInput;