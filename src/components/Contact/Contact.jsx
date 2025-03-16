import { useState } from "react";
import Heading from "../Home/Heading";

function Contact() {
    const [focusedField, setFocusedField] = useState(null);

    return (
        <div id="contact" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <Heading data={{ shortText: 'reach me anytime', title: 'contact me' }} />
            <div className="flex flex-col gap-5 w-full p-5 shadow-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <label htmlFor="name" className="flex flex-col gap-5 w-full">
                        <h3 className={`uppercase font-playfair font-semibold transition-colors duration-500 ${focusedField === 'name' && 'text-[#ff6600]'}`}>full name</h3>
                        <input type="text" name="name" id="name" className="w-full h-12 px-4 text-gray-300 shadow-inside border-none outline-none focus:ring-0 focus:outline-none" onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} required />
                    </label> 
                    <label htmlFor="email" className="flex flex-col gap-5 w-full">
                        <h3 className={`uppercase font-playfair font-semibold transition-colors duration-500 ${focusedField === 'email' && 'text-[#ff6600]'}`}>email</h3>
                        <input type="email" name="email" id="email" className="w-full h-12 px-4 text-gray-300 shadow-inside border-none outline-none focus:ring-0 focus:outline-none" onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} required />
                    </label>
                </div>
                <label htmlFor="subject" className="flex flex-col gap-5">
                    <h3 className={`uppercase font-playfair font-semibold transition-colors duration-500 ${focusedField === 'subject' && 'text-[#ff6600]'}`}>subject</h3>
                    <input type="text" name="subject" id="subject" className="w-full h-12 px-4 text-gray-300 shadow-inside border-none outline-none focus:ring-0 focus:outline-none" onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)} required />
                </label>
                <label htmlFor="message" className="flex flex-col gap-5">
                    <h3 className={`uppercase font-playfair font-semibold transition-colors duration-500 ${focusedField === 'message' && 'text-[#ff6600]'}`}>your message</h3>
                    <textarea name="message" id="message" className="w-full min-h-52 p-4 text-gray-300 shadow-inside border-none outline-none focus:ring-0 focus:outline-none" onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} required></textarea>
                </label>
            </div>
        </div>
    );
}

export default Contact;