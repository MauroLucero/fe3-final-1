import React, { useContext } from 'react'

import { Link, navigate } from 'react-router-dom'
import { routes } from './utils/routes'
import { ContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // const {darkMode, toggleTheme} = useContext(ContextGlobal)

  return (
    <nav>
{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <div className='navbar'>
            {/* <button onClick={() => navigate(-1)}>↩Back</button> */}
              <Link to={routes.home}><h4 className='link navbarElements'>Home</h4></Link>
              <Link to={routes.contact}><h4 className='link navbarElements'>Contact</h4></Link>
              <Link to={routes.favs}><h4 className='link navbarElements'>Favs</h4></Link>
{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
             <button>Change theme</button>
          </div>
    </nav>
  )
}

export default Navbar