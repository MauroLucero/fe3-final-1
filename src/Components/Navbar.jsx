import React, { useContext } from 'react'

import { Link, navigate } from 'react-router-dom'
import { routes } from './utils/routes'
import { ContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, toggleTheme} = useContext(ContextGlobal);


  return (
    <nav>
{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <div className='navbar'>
            {/* <button onClick={() => navigate(-1)}>↩Back</button> */}
              <Link to={routes.home}><h4 className='link'>Home</h4></Link>
              <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
              <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          </div>
             <button className='myButton' onClick={toggleTheme}>
             {themeState.darkMode ? 'Dark Theme' : 'Light Theme'}
              </button>
    </nav>
  )
}

export default Navbar