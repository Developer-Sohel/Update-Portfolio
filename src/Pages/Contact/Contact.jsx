import React, { useState } from 'react';
import contact from '../../assets/images/contact.png';
import 'animate.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const myPhoneNumber = "01310148383";
    const myEmail = "sohelkhan5957733@gmail.com"; 

    const handleSubmit = (e) => {
        e.preventDefault();

        // Welcome message to be sent automatically
        const welcomeMessage = "Thank you for contacting us! We will get back to you shortly.";
        
        // Combine user data and welcome message
        const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n${welcomeMessage}`;
        
        // Encode the message for URL
        const encodedWhatsAppMessage = encodeURIComponent(whatsappMessage);
        
        // Create the WhatsApp link
        const whatsappLink = `https://wa.me/${myPhoneNumber}?text=${encodedWhatsAppMessage}`;

        // Open the link in a new tab
        window.open(whatsappLink, '_blank');

        // Reset form and show success message
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
        }, 3000);
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();

        const emailSubject = encodeURIComponent("New Contact Form Submission");
        const emailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        );

        window.location.href = `mailto:${myEmail}?subject=${emailSubject}&body=${emailBody}`;

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
        }, 3000);
    };

    return (
        <div className="container mx-auto py-16 px-4 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
                <img
                    src={contact} 
                    alt="Contact Us"
                    className="w-full object-center lg:h-[500px] rounded-lg shadow-lg"
                />
            </div>

            <div className="md:w-1/2 animate__animated animate__fadeInRight">
                <div className="rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

                    {isSubmitted && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                            <strong className="font-bold">Success!</strong> Your message has been sent.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="lg:flex  gap-4 ">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex-1 w-full mb-4"
                            >
                                Send via WhatsApp
                            </button>
                            <button
                                type="button"
                                onClick={handleEmailSubmit}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex-1 w-full mb-4"
                            >
                                Send via Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;