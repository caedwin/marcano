import { useState, UseRef } from "react";
import {InputEmail, InputPassword} from "../constructores/ConstructLogin"
import { esEmail, esPassword } from "../components/Validaciones";
import {Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
import CompShowFile from "../blogs/ShowFile";


const CompLogin = () =>{

    const [email, setNombre] = useState('');
    const [password, setPasswod] = useState('');
    const navigate = useNavigate();
    const errorMessage = 'acceso denegado';
    
    

    const submit =(e)=>{
        e.preventDefault()
        
        if(email == 'admin@mikrotik.com' && password == 'mikrotik1a1'){
        
            return     navigate('/consultas')
    
        }else{
            console.log(errorMessage);
        }
    }

    return(

        <div className="container">
            <h1 className="mt-3">Login</h1>
           <div className="d-flex justify-content-center text-start" >
                <div className="card" style={{width: 600, height: 400}}>
                    <form className=" mx-5 mt-5" >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={(e) => setNombre(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e) => setPasswod(e.target.value)} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-primary" onClick={submit}>Ingresar</button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </div>

    )
}

export default CompLogin;