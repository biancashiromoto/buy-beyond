import logo02 from '../../assets/images/logo02.png';

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className='logo-header-image' src={logo02} style={{width: '15vw'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about-us">Sobre nós</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
