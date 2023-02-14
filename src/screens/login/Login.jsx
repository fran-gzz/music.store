import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";

import Swal from "sweetalert2";


export const Login = () => {

    const navigate = useNavigate();

    const { addUser } = useAppContext();

    const [ dataForm, setDataForm ] = useState({
        name: '',
        password: '',
        phone: '',
        email: '',
        confirmEmail: ''
    })

    const [ emailError, setEmailError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');

    const validateEmail = ( email ) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    
    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validaciones
        if ( !validateEmail( dataForm.email )) {
            setEmailError( 'Email inválido' );
            return;
        }
        if (dataForm.email !== dataForm.confirmEmail) {
            setEmailError('Los emails no coinciden');
            return;
        }
        
        if (!dataForm.email || !dataForm.password) {
            setEmailError('Los campos no pueden estar vacíos');
            return;
        }
        if ( dataForm.password < 8 ) {
            setPasswordError('La contraseña debe tener al menos 8 carácteres')
            return;
        }

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



	const handleChange = ( e )=>{
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        setEmailError('')
        setPasswordError('')
    }

    
    return (
        <div className="animate__animated animate__fadeIn">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={dataForm.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={dataForm.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="email"
                    name="confirmEmail"
                    value={dataForm.confirmEmail}
                    onChange={handleChange}
                    placeholder="Confirm email"
                    required
                />
        
                { emailError && <p>{ emailError }</p> }
                <input
                    type="password"
                    name="password"
                    value={dataForm.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                { passwordError && <p>{ passwordError }</p> }

                <button className="button button--primary" type="submit">Iniciar Sesión</button>

            </form>
        </div>
    )
}