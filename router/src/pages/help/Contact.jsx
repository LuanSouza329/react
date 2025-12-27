export function Contact() {
    return (
        <div className="contact">
            <h3>Contact Us</h3>

            <form action="">
                <label htmlFor="">Your email:
                    <input type="email" required name="email" />
                </label>
                <label htmlFor="">Your Message:
                    <input type="text" name="" id="" />
                </label>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}