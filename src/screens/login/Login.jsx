import { useForm } from "../../hooks";
import { Animated } from "../../components";

export const Login = () => {
    const { handleSubmit, handleChange, formLayout, errorMessage } = useForm();
    return (
        <Animated>
            <article className="form__container">
                <form onSubmit={ handleSubmit } className='form'>
                    { formLayout.map( data => (
                        <div className="form__control" id={`input-${ data.name }`} key={ data.name }>
                            <label htmlFor={ data.name } className='form__control--label'>
                                { data.label }
                            </label>
                            <input type={ data.type } name={ data.name } value={ data.value } required 
                                onChange={ handleChange } className='form__control--input'placeholder={ data.label }
                            />
                        </div>
                    ))}
                    { errorMessage && <p id="input-error">{ errorMessage }</p> }
                    <button className="button button--primary" type="submit" id="input-button">
                        Iniciar Sesión
                    </button>
                </form>
            </article>
        </Animated>
    )
}