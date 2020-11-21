import './style.scss'
import menuBar from '../../svg/logo-hamburguesa.svg';
import iconEmail from '../../svg/icon-mail.svg';
import iconPhone from '../../svg/icon-phone.svg';
import iconFacebook from '../../svg/icon-facebook.svg';
import iconInstagram from '../../svg/icon-instagram.svg';


export default function App() {
  return (
    <header>
      <div className="menu-principal">
        <div className="contactos">
          <div className="correo">
              <div className="contenedor-correo">
                  <img src={iconEmail} alt=""/>
              </div>
              <div className="gmail">
                  <p className="gmail_wesiteyou">wesiteyou.info@gmail.com</p>
              </div>
          </div>
          <div className="telefono">
              <div className="contenedor-telefono">
                  <img src={iconPhone} alt=""/>
              </div>
              <div className="telefono_wesiteyou">
                  <p className="numero_wesiteyou">3195968036</p>
              </div>
          </div>
        </div>
        <div className="menu">
            <div className="contenedor-redes-sociales">
                <a href="#">
                    <span className="logo-facebook">
                        <img src={iconFacebook} alt=""/>
                    </span>
                </a>
                <a href="#">
                    <span className="logo-instagram">
                        <img src={iconInstagram} alt=""/>
                    </span>
                </a>
            </div>
            <div className="menu-hamburguesa">
                <div className="menu-nombre">
                    <p className="texto-menu">HAZ CLICK AQUÍ</p>
                </div>
                <div className="contenedor-menu-hamburguesa">
                    <img src={menuBar} alt=""/>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}