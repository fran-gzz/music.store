
export const Home = ({ usuario, subtitulo }) => {
    return (
        <>
            <section>
                <h1>Bienvenido, {usuario ? usuario : 'usuario'}.</h1>
                <p>{subtitulo}</p>
            </section>
        </>
    )
}
