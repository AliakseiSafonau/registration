import React from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { SignUpInfo } from './pages/SignUpInfo'
import { PersonalInfo } from './pages/PersonalInfo'
import { Provider } from 'react-redux'
import Header from './partials/Header'
import Footer from './partials/Footer'
import store from './store/main'

function App() {
  const SetBreadCrumb  = () => {
    let hash = useLocation().pathname
    return (hash === '/')
    ?
      (<section className="breadcrumb mb-10 w-full max-w-[400px] flex items-center">
        <div className="signupinfo text-amber-500 font-medium text-xl">SignUpInfo</div>
      </section>)
    :
     (<section className="breadcrumb mb-10 w-full max-w-[400px] flex items-center">
        <div className="signupinfo">
          <Link to="/" className="text-amber-500 font-medium text-xl">SignUpInfo</Link>
        </div>
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f7ad30" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg>
        </div>
        <div className="personalinfo text-amber-500 font-medium text-xl">PersonalInfo</div>
      </section>)
  }

  return (
    <div className="App">
      <Header />
      {SetBreadCrumb()}
        <Provider store={store}>
          <Routes>
            <Route path="/" element={ <SignUpInfo /> }/>
            <Route path="/personal" element={ <PersonalInfo /> }/>
          </Routes>
        </Provider> 
      <Footer />
    </div>
  );
}

export default App;
