import { email, telephone, whatsapp } from "../../helpers/info";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="py-3">
      <h5 className="text-center">Contato</h5>
      <ul className="d-flex justify-content-between px-5 mt-4">
        <li className="whatsapp">
          <a
            className="text-decoration-none visually-hidden"
            href='https://wa.me/17819210306?'
            target="_blank"
            rel="noreferrer"
          >
              {whatsapp}
          </a>
        </li>
        <li className="telephone">
          <a
            className="text-decoration-none visually-hidden"
            href={`tel:${telephone}`}
            target="_blank"
            rel="noreferrer"
          >
            {telephone}
          </a>
        </li>
        <li className="email">
          <a
            className="text-decoration-none visually-hidden"
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
          >{email}</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
