import React from "react";
import './css/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CompShowFile from './blogs/ShowFile';
import CompCreateFile from './blogs/CreateFile';
import CompEditFile from './blogs/EditFile';
import CompShowIndex from './blogs/ShowIndex';
import CompLogin from './components/Login';
import CompRegistrar from './components/Registrar';
import ImgUsuario from './images/usuario.png';
import CompShowVideo from './blogs/ShowVideo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-light App-margenContenedor">
          <div className="container-fluid App-margin-header ms-5">
            <a className="App-logo" href="/"><h1>MikroTik</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse App-margin-header" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Inicio</a></li>
                {/* <li className="nav-item"><a className="nav-link" href="/consultas">Consulta</a></li> */}
                <li className="nav-item"><a className="nav-link" href="https://mikrotik.com/client" target="_blank" rel='noopener'>MikroTik</a></li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div className="px-5">
              <a href='/login'><img src={ImgUsuario} width='20rem'></img><h6>Login</h6></a>
            </div>
            
            
          </div>
        </nav>
      </header>
      
       <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CompShowIndex/>}/>
          <Route exact path='/consultas' element={<CompShowFile/>}/>
          <Route exact path='/create' element={<CompCreateFile/>}/>
          <Route exact path='/edit/:id' element={<CompEditFile/>}/>
          <Route exact path='/play/:id' element={<CompShowVideo/>}/>
          <Route exact path='/login' element={<CompLogin/>}/>
          <Route exact path='/registrar' element={<CompRegistrar/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
