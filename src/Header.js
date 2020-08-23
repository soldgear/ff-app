import React from 'react'


const Header = ({isHidden, setHidden, sectionName}) => {
    return (

        <div className="App-header">

              <div className="opt" onClick={() => {setHidden(!isHidden)}}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
              </div>

              <div className="section-name"><h1>{sectionName}</h1></div>
              
              <div className="logo"><h1>O-Shot</h1></div>
          </div>
    )
}

export default Header