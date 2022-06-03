export default function NavBar() {
  return (
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
              <div className='navbar-header'>
                  <a  className='navbar-brand' href="#">TecnoShop</a>
              </div>
              <ul className='navbar-nav'>
                  <li  className='nav-item'>
                      <a className="nav-link" href="#">Laptops </a>
                  </li>
                  <li className='nav-item'>
                      <a className="nav-link" href="#">Celulares </a>
                  </li>
                  <li className='nav-item'>
                      <a className="nav-link" href="#">Componentes </a>
                  </li>
              </ul>
      </nav>
  )
}
