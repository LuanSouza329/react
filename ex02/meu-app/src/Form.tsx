import React, { useReducer } from "react";

function Form() {

    interface User {
        name: string,
        email: string,
        age: number,
        city: string,
        country: string,
        newsletter: boolean
    }

    interface Action {
        type: string;
        field?: keyof User;
        value?: string | number | boolean;
    }

    const initialState: User = {
        name: "",
        email: "",
        age: 0,
        city: "",
        country: "",
        newsletter: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state: User, action: Action): User {
        switch (action.type) {
            case "UPDATE_FIELD":
                return {
                    ...state,
                    [action.field!]: action.value
                }
            case "RESET":
                return initialState;
            case "TOGGLE_NEWSLETTER":
                return {
                    ...state,
                    newsletter: !state.newsletter
                }
            default:
                return state;
        }
    }

    const isAdult = state.age >= 18;
    const isEmail = state.email.includes("@");

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                value={state.name}
                required
                onChange={(e) => dispatch({
                    type: "UPDATE_FIELD",
                    field: "name",
                    value: e.target.value
                })}
            />

            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                placeholder="Digite seu email"
                value={state.email}
                onChange={(e) => dispatch({
                    type: "UPDATE_FIELD",
                    field: "email",
                    value: e.target.value
                })}
            /> <p> {isEmail ? "" : "email incorreto @ é obrigatório"} </p>

            <label htmlFor="age">Age: </label>
            <input
                type="number"
                id="age"
                placeholder="Digite sua idade"
                value={state.age}
                onChange={(e) => dispatch({
                    type: "UPDATE_FIELD",
                    field: "age",
                    value: Number(e.target.value)
                })}
            />  <p>{isAdult}</p>


            <label htmlFor="city">City: </label>
            <input
                type="text"
                id="city"
                placeholder="Digite sua cidade"
                value={state.city}
                onChange={(e) => dispatch({
                    type: "UPDATE_FIELD",
                    field: "city",
                    value: e.target.value
                })}
            />

            <label htmlFor="country">Country: </label>
            <input
                type="text"
                id="country"
                placeholder="Digite o seu país"
                value={state.country}
                onChange={(e) => dispatch({
                    type: "UPDATE_FIELD",
                    field: "country",
                    value: e.target.value
                })}
            />

            <label htmlFor="newsletter">
                <input
                    type="checkbox"
                    id="newsletter"
                    checked={state.newsletter}
                    onChange={(e) => dispatch({
                        type: "UPDATE_FIELD",
                        field: "newsletter",
                        value: e.target.checked
                    })}
                /> News letter
            </label>


            <p>{state.name}</p>
            <p>{state.email}</p>
            <p>{state.city}</p>
            <p>{state.country}</p>
        </div>
    );
}

export default Form;