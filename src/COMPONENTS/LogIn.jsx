

const Login = () => {
    return (
        <>
            <form className="login">
                <h1 id="">LOGIN</h1>

                <label>
                    <input placeholder="name" type="text" id="name" name="name"></input>
                </label>

                <label>
                    <input placeholder="email" type="text" id="email" name="email"></input>
                </label>

                <label>
                    <input placeholder="password" type="password" id="password" name="password"></input>
                </label>

                <a href="#">Olvidaste tu contraseña?</a>
                <a href="#">Registrarse</a>
                <button type="button" class="button" id="botonLogin" >Login</button>
            </form>
        </>
    );
};