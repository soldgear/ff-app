import React from 'react'
import Tale from './Tale'

const Home = () => {
    return(

        <div className="App-body">

            <h1>Recomendados</h1>

            <Tale 
                title="Darling in the Franxx - Spin-Off"
                desc="A new Story that never happens ;-;"
                image="https://taverna42.files.wordpress.com/2018/11/whatsapp-image-2018-02-04-at-16-47-54-2.jpeg?w=1280&h=720&crop=1"
                />
        </div>


        
    )
}

export default Home