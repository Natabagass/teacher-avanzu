'use client'

import ModalCheckboxInput from "@components/modal/checkbox-input";
import Text from "@components/text";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const CheckboxInput = ({
    hide,
    label,
    labelStyle
}: {
    label?: string,
    labelStyle?: string,
    hide?: boolean
}) => {
    const [showModal, setShowModal] = useState(false);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const selectedCategories = Object.keys(checkedItems).filter((item: any) => checkedItems[item]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleRemoveCategory = (categoryName: any) => {
        setCheckedItems(prevCheckedItems => {
            const updatedCheckedItems = { ...prevCheckedItems };
            delete updatedCheckedItems[categoryName];
            return updatedCheckedItems;
        });
    };


    return (
        <div className="flex flex-col w-full">
            <Text
                size="p3"
                variant="label"
                weight="font-normal"
                color="text-content-secondary"
            >
                {label}
            </Text>
            <div className="flex flex-col w-full relative">
                <div onClick={() => toggleModal()} className="flex flex-row mt-2 items-center flex-wrap border border-stroke-primary rounded-3xl bg-purple-100 relative cursor-pointer">
                    {
                        selectedCategories.length > 0 ?
                            selectedCategories.map((tag: string, index: number) => {
                                return (
                                    <div key={index} className="flex items-center bg-purple-300 text-xs text-white rounded-full px-4 py-2 m-1">
                                        <span>{tag}</span>
                                        <button
                                            type="button"
                                            className="ml-2 text-white"
                                            onClick={() => handleRemoveCategory(tag)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                )
                            })
                            :
                            <div className="py-2 px-4 flex flex-row justify-between w-full items-center">
                                <Text size="p3" weight="font-normal">-</Text>
                            </div>
                    }
                </div>
                <ModalCheckboxInput
                    show={showModal}
                    onClose={toggleModal}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                />
            </div>
        </div>
    );
}

export default CheckboxInput;