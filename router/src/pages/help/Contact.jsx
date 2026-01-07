import { Form, redirect, useActionData } from "react-router-dom"

export function Contact() {
    const data = useActionData();
    return (
        <div className="contact">
            <h3>Contact Us</h3>

            <Form method="post" action="/help/contact">
                <label htmlFor="email">Your email:
                    <input type="email" required name="email" autoComplete="email"/>
                </label>
                <label htmlFor="message">Your Message:
                    <input type="text" name="message" id=""/>
                </label>
                <button type="submit"> Submit </button>

                {data && data.error && <p> {data.error} </p>}
            </Form>
        </div>
    )
};


export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get("message")
    }

    /* Send post request */
    if (submission.message.length < 10){
        return {error: "Message must be over 10 characters"}
    }

    /* redirect user */
    return redirect("/");
}

