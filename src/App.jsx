import React from 'react'
import Footer from './components/Footer/Footer'
import People from './components/People/People'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Work />
      <Portfolio />
      <People />
      <Footer />
    </div>
  )
}

export default App