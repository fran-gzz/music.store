import Swal from "sweetalert2"

export const showSuccessToast = ( message ) => {
    Swal.fire({
        toast: true,
        position: 'bottom-right',
        title: message,
        showConfirmButton: false,
        icon: 'success',
        timer: 1800,
        timerProgressBar: true,
        background: '#343434',
        color: '#fff'
    });
}

export const showUpdatedToast = ( message ) => {
    Swal.fire({
        toast: true,
        position: 'bottom-right',
        title: message,
        showConfirmButton: false,
        icon: 'info',
        timer: 1800,
        timerProgressBar: true,
        background: '#343434',
        color: '#fff'
    });
}

export const showErrorToast = ( message ) => {
    Swal.fire({
        title: 'Error',
        text: message,
        icon: 'error',
        timer: 1800,
        timerProgressBar: true,
        showConfirmButton: false,
        confirmButtonColor: '#363fe6',
    });
}

