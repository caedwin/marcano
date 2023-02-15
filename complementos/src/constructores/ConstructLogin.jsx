import React, { useState, UseRef } from "react";




export class InputEmail extends React.Component {

    constructor(props) {
        super(props);
        this.actualizarState = this.actualizarState.bind(this);
        this.state = {
            value:"",
            error: false,
            mensajeError:"El campo no puede estar en blanco, ingrese un correo válido"
        };
    }

   

    actualizarState (e){
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        console.log(this.props.validacion(value));

        if(!this.props.validacion(value)){
            this.setState({
                name,
                value,
                error: false,
                mensajeError:""
            });
            this.props.actualizarState({
                name, value, error: false
            })
        }else{
            this.setState({
                name,
                value,
                error: true,
                mensajeError:"Introduzca una dirección de correo electrónico válida"
            });
            this.props.actualizarState({
                name, value, error: true
            })
        }

    }

   
    render() {
        return (
            <div className="">
                <div className="componente">
                    <label className="componente-input-label" htmlFor={'id-' + this.props.name}>{this.props.label}</label>
                    <input
                        id={'id-' + this.props.name}
                        type="email"
                        name={this.props.name}
                        placeholder="ejemplo@dominio.com"
                        className={this.state.error ? "border-error " :"borde"}
                        onChange={this.actualizarState}  
                    />
                    {
                        this.state.error ?(
                            <label className="componente-input-error ">{this.state.mensajeError}</label>
                        ):('')
                    }
                </div>
                
            </div>
            
        );
    }

}

export class InputPassword extends React.Component {

    constructor(props) {
        super(props);
        this.actualizarState = this.actualizarState.bind(this);
        this.state = {
            value:"",
            error: false,
            mensajeError:"El campo no puede estar en blanco, ingrese un correo válido"
        };
    }
   
    actualizarState (e){
        const {name, value} = e.target;
        console.log(name)
        console.log(value);
        console.log(this.props.validacion(value));

        if(this.props.validacion(value)){
            this.setState({
                name,
                value,
                error: false,
                mensajeError:''
            });
            this.props.actualizarState({
                name, value, error: true
            })
        }else{
            this.setState({
                name,
                value,
                error: true,
                mensajeError:"La contraseña es muy larga, instroduzca una contraseña válida"
            });
            this.props.actualizarState({
                name, value, error: false
            })
        }
    }

    render() {

        return (
            <div className="componente mt-3">
                 <label className="componente-input-label" htmlFor={'id-' + this.props.name}>{this.props.label}</label>
                <input   
                className={this.state.error ? "border-error " :"borde"}
                type="password" 
                name={this.props.name}
                id="UserPassword" 
                placeholder="contraseña"
                onChange={this.actualizarState}
                />
                {
                    this.state.error ?(
                        <label className="componente-input-error ">{this.state.mensajeError}</label>
                    ):('')
                }
            </div>
           
        );


    }
   
}