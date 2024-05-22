import React from 'react';

const CheckPassword = ({ password }: { password: string }) => {
    const getPasswordStrength = (password: string) => {
        const hasNumber = /[0-9]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|`\-=/\\]/.test(password);
    
        let criteriaMet = 0;
    
        if (hasNumber) criteriaMet++;
        if (hasUpperCase) criteriaMet++;
        if (hasSymbol) criteriaMet++;
    
        if (criteriaMet === 3 && password.length > 8) {
            return "fuerte";
        } else if (criteriaMet === 1) {
            return "débil";
        } else if (criteriaMet === 2 && password.length > 8) {
            return "normal";
        } else {
            return "débil";
        }
    };    

    const passwordStrength = getPasswordStrength(password);

    const getLineColor = (passwordStrength: "débil" | "normal" | "fuerte", index: number) => {
        if (passwordStrength === "débil") {
            return index === 0 ? "bg-red-300" : "bg-purple-200";
        } else if (passwordStrength === "normal") {
            return index < 2 ? "bg-orange-200" : "bg-purple-200";
        } else if (passwordStrength === "fuerte") {
            return index < 3 ? "bg-green-200" : "bg-purple-200";
        } else {
            return "bg-red-300";
        }
    };
    

    return (
        <div className="flex w-full mt-3 flex-col gap-2">
            <div className='w-full flex flex-row gap-2'>
                {
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={`w-full ${getLineColor(passwordStrength, index)} rounded-2xl  h-[2px]`} />
                        ))
                }
            </div>
            <p className={`${passwordStrength === "débil" ? "text-red-300" : passwordStrength === "normal" ? "text-orange-200" : "text-green-200"} text-sm`}>
                Fuerza de la contraseña: {passwordStrength}.
            </p>
        </div>
    );
};

export default CheckPassword;

