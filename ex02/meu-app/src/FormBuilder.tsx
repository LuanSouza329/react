import { ReactHTMLElement, useState } from "react"

function FormBuilder() {

    const fields: FormFields[] = [
        { name: "name", label: "nome", type: "text", placeHolder: "Digite seu nome", autoComplete: "name", min: 3, required: true }
    ]

    return (
        <div>
            {fields.map((field) =>
                <div key={field.name}>
                    <label>{field.label}</label>
                    <input
                        type={field.type}
                        placeholder={field.placeHolder}
                        onChange={(e) => handleChanges(field.name, e.target.value)}
                        value={values[field.name]}
                        autoComplete={field.autoComplete}
                        min={field.min}
                    /> <p>{values.name}</p> <p>{errors.name}</p>
                </div>
            )}
        </div>
    );
}

export default FormBuilder;