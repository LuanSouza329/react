import { useState } from "react";

interface FormFields {
    name: string
    label: string,
    type: "text" | "number" | "email"
    placeHolder?: string
    autoComplete?: string
    min?: number,
    required?: boolean
}

function createInitialState(fields: FormFields[]) {
    const values = fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
    }, {} as Record<string, string>);

    return values;
}

function useForm(fields: FormFields[]) {


    const [values, setValues] = useState(() => createInitialState(fields));
    const [errors, setErrors] = useState(() => createInitialState(fields));

    function validateField(field: string, value: string) {
        const fieldConfig = fields.find(f => f.name === field)

        let errorMessage = "";

        if (!fieldConfig) {
            return;
        }

        if (fieldConfig.required && value === "") {
            errorMessage = "Campo obrigatório";
        } else if (value !== "" && fieldConfig.min !== undefined && value.length < fieldConfig.min) {
            errorMessage = `Valor mínimo ${fieldConfig.min}`;
        }

        setErrors(prev => ({
            ...prev,
            [field]: errorMessage
        }))
    }

    const handleChange = (field: FormFields['name'], value: string) => {
        validateField(field, value)
        setValues(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return {
        values,
        errors,
        handleChange
    }
}