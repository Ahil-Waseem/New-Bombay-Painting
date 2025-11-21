import Video4 from "../assets/videos/video4.mp4";

function PopupVideo({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2">
            <div className="bg-[#111] text-white rounded-xl p-4 w-[90%] max-w-[360px] shadow-xl relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-300 text-xl hover:text-white"
                >
                    ✖
                </button>

                {/* Title */}
                <h2 className="text-xl font-bold text-yellow-400 text-center mb-1">
                    How We Work
                </h2>

                <p className="text-gray-300 text-sm text-center mb-3 leading-tight">
                    A quick look into our professional work process.
                </p>

                {/* PERFECT REEL STYLE VIDEO */}
                <div className="w-full h-[420px] rounded-xl overflow-hidden bg-black shadow-lg mx-auto">
                    <video
                        src={Video4}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    ></video>
                </div>

                {/* Button */}
                <a
                    href="tel:+919819584682"
                    className="block text-center mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                >
                    📞 Call Now
                </a>
            </div>
        </div>
    );
}

export default PopupVideo;
