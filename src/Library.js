import React from 'react'
import Tale from './Tale'

const Library = () => {
    return(
        <div className="Tales">

            <div className="App-body">

                <Tale 
                title="Darling in the Franxx - Zero-Night Fall"
                desc="A new Story that never happens ;-;"
                image="https://taverna42.files.wordpress.com/2018/11/whatsapp-image-2018-02-04-at-16-47-54-2.jpeg?w=1280&h=720&crop=1"
                />

                <Tale />
                <Tale />
            </div>

        </div>
    )
}

export default Library