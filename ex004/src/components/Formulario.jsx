import { useForm } from "react-hook-form";
import "./Formulario.css";

export function Formulario() {


    const { register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const enviarForm = () => {
        handleSubmit(onSubmit)();
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    {...register("name", { required: true })}
                />
                {errors?.name?.type === 'required' && <p className="error-message">Nome é obrigatório</p>}
            </div>
            <input
                type="email"
                placeholder="Digite seu E-mail"
                {...register("email", { required: true })}
            />

            <div>
                <input
                    type="password"
                    placeholder="Digite seu senha"
                    {...register("senha", { required: true, minLength: 8 })}
                />
                {errors?.senha?.type === 'minLength' && <p className="error-message">a senha deve ter pelo menor 8 caracteres</p>}
                {errors?.senha?.type === 'required' && <p className="error-message">A senha é obrigatória</p>}

            </div>

            <button
                type="submit"
                onClick={enviarForm}>
                Enviar
            </button>
        </>
    );
}