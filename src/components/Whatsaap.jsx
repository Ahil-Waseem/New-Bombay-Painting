import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2">

            {/* Tooltip Text */}
            {/* <span className="bg-black/80 text-white text-sm py-2 px-3 rounded-lg shadow-md hidden md:block">
                Welcome to New Bombay Painting Service
            </span> */}

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/9320837842?text=Hello%20Welcome%20to%20New%20Bombay%20Painting%20Service"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center 
                   justify-center rounded-full shadow-xl transition-all duration-300 animate-bounce"
            >
                <FaWhatsapp className="text-3xl" />
            </a>

        </div>
    );
}
