import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context";
import Swal from "sweetalert2";

const initialState = {
    name: '',
    password: '',
    phone: '',
    email: '',
    confirmEmail: ''
}

const validateEmail = ( email ) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test( String( email ).toLowerCase() );
};

export const useForm = (  ) => {

    const [ dataForm, setDataForm ] = useState( initialState );
    const [ errorMessage, setErrorMessage ] = useState('');

    const formLayout = [
        {   
            name: 'name',
            label: 'Nombre',
            type: 'text',
            value: dataForm.name
        },
        {
            name: 'phone',
            label: 'Teléfono',
            type: 'tel',
            value: dataForm.phone
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            value: dataForm.email
        },
        {
            name: 'confirmEmail',
            label: 'Confirmar email',
            type: 'email',
            value: dataForm.confirmEmail
        },
        {
            name: 'password',
            label: 'Contraseña',
            type: 'password',
            value: dataForm.password
        },
    ]

    const { addUser } = useAppContext();

    const navigate = useNavigate();

    const handleChange = ( e )=> {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        setErrorMessage('')
    }

    const handleSubmit = ( e ) => {
        
        e.preventDefault();

        // Validaciones
        if ( dataForm.email !== dataForm.confirmEmail ) 
            return setErrorMessage( 'Los emails no coinciden' );
        if ( !dataForm.email || !dataForm.password ) 
            return setErrorMessage( 'Los campos no pueden estar vacíos' );
        if ( dataForm.password.length < 8 ) 
            return setErrorMessage('La contraseña debe tener al menos 8 carácteres');
        if ( !validateEmail( dataForm.email )) 
            return setErrorMessage( 'Email inválido' );
            
        
        // Si está todo ok, saluda al usuario y establece el user dentro del context.
        Swal.fire({
            title: `¡Bienvenido ${dataForm.name}!`,
            text: 'Inicio de sesión exitoso!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        }).then(() => {
            addUser( dataForm )
            navigate(-1);
        });
    };

    return {
        dataForm,
        handleChange,
        formLayout,
        handleSubmit,
        errorMessage
    }
}