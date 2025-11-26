import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-SP9SZ4YDS1", {
                page_path: location.pathname,
            });
        }
    }, [location]);
}
