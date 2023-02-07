import Swal from "sweetalert2"

export const showSuccessToast = () => {
    Swal.fire({
        position: 'center',
        title: 'Producto agregado',
        icon: 'success',
        timer: 900,
        timerProgressBar: true,
    });
}

export const showErrorToast = ( message ) => {
    Swal.fire({
        title: 'Error',
        text: message,
        icon: 'error',
    });
}