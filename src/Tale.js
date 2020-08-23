import React from 'react' 
import './Tale.css'

const Tale = ({title, desc, image}) => {
    return (
        <div className="Tale">
            <header>
                <img src={image} alt="" />
                <h1>{title}</h1>
            </header>
            
            <p><strong>Description:</strong> {desc}</p>

            <footer>
                <a href="#">Read</a>
                <div>
                    <button>Like</button>
                    <button>Coment</button>
                    <button>+ Favorites</button>
                </div>
            </footer>
        </div>
    )
}

export default Tale