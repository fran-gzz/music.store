import { useEffect } from "react";
import Swal from "sweetalert2"

export const Alert = ({ title, text, icon }) => {
    useEffect(() => {
        Swal.fire({
            title,
            text,
            icon
        })
    }, []);
    return <div/>;
}