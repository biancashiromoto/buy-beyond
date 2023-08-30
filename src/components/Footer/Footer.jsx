import { email, telephone, whatsapp } from "../../helpers/info";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="py-3">
      <h2 className="text-center">Contato</h2>
      <ul className="d-flex justify-content-between px-5 mt-4">
        <li className="whatsapp">
          <a
            className="whatsapp-link text-decoration-none"
            href='https://wa.me/17819210306?'
            target="_blank"
            rel="noreferrer"
          >
            <span className="visually-hidden">{whatsapp}</span>
          </a>
        </li>
        <li className="telephone">
          <a
            className="telephone-link text-decoration-none"
            href={`tel:${telephone}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="visually-hidden">{telephone}</span>
          </a>
        </li>
        <li className="email">
          <a
            className="email-link text-decoration-none"
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="visually-hidden">{email}</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
