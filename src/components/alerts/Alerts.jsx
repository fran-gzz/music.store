import Swal from "sweetalert2"

export const showSuccessToast = () => {
    Swal.fire({
        position: 'top-end',
        toast: true,
        title: 'Producto agregado',
        showConfirmButton: false,
        icon: 'success',
        timer: 2000,
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