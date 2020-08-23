import React from 'react'
import { Link } from 'react-router-dom'

const Options = ({isHidden, setOpt}) => {

    return (
        <nav id="Options-Menu" className={isHidden ? "Hidden" : ""}>
            
            <div className="profile">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-pic" />
              <h1>Perfil</h1>
            </div>
            
            <ul>
                <li><Link className="links" to="/" onClick={ () => setOpt('Home')} >Home</Link></li>
                <li><Link className="links" to="/library" onClick={ () => setOpt('Library')}>Library</Link></li>
                <li><Link className="links" to="/favorites" onClick={ () => setOpt('Favorites')}>Favorites</Link></li>
                <li><Link className="links" to="/settings" onClick={ () => setOpt('Settings')}>Settings</Link></li>
                <li><a href="#" alt="">Sair</a></li>
            </ul>
        </nav>
    )

    
    
}

export default Options