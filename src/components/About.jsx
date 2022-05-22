import './About.css'

function About() {
    const redesSociales = 'https://static.vecteezy.com/system/resources/previews/002/534/046/large_2x/social-media-icons-of-facebook-whatsapp-instagram-facebook-logos-free-vector.jpg'
    return(
        <div>
            <div className="div1">
                <h1>Eduardo Daniel Gonzalez Hernandez</h1>
                <h3>Pais: Mexico</h3>
                <h3>Ciudad: Tehuacan Puebla</h3>
                <h3>Edad: 25 años</h3>
            </div>
            <div className="div2">
                <h5>Contato y redes sociales</h5>
                <p><b>Correo: <a href='#'>eduardodaniel_gonzalez@mail.com</a> </b></p>
                <img id="imagen" src={redesSociales} alt="redes sociales"/>
            </div>
            <footer>
                <a href='https://www.freepik.es/vectores/logo'>Vector de Logo creado por myriammira - www.freepik.es</a>
            </footer>
        </div>
    );
}

export default About;