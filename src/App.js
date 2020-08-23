import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Options from './Options'
import Home from './Home'
import Library from './Library'


import Tale from './Tale'
import './App.css';
import './responsive.css'

function App() {


  const [isHidden, setHidden] = useState(true)
  const [sectionName, setName] = useState('')


  const selectedOption = (name) => {
    setHidden(true)
    setName(name)
  }

  return (
    <Router>

      <div className="App">

        <Options isHidden={isHidden} setOpt={selectedOption}/>

        <div className="main-container">

          <Header 
            isHidden={isHidden} 
            setHidden={setHidden}
            sectionName={sectionName}
            />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/library" component={Library} />
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}     

export default App;
