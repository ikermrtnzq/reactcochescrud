import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import ServiceCoches from '../services/ServiceCoches';

export default class Insert extends Component {
    state ={
        status : false
    }

    cajaNumero= React.createRef();
    cajaMarca= React.createRef();
    cajaModelo= React.createRef();
    cajaConductor= React.createRef();
    cajaImagen= React.createRef();

    service = new ServiceCoches();
    mandarCoche = async(event) => {
        event.preventDefault();

        let coche ={
                "idCoche": parseInt(this.cajaNumero.current.value),
                "marca": this.cajaMarca.current.value,
                "modelo": this.cajaModelo.current.value,
                "conductor": this.cajaConductor.current.value,
                "imagen": this.cajaImagen.current.value
            }
        //console.log(coche);
        let datos = await this.service.insertarCoche(coche);
        console.log(datos)
        this.setState({
            status: true
        })
        
    }
    render() {
        if(this.state.status){
            return(<Navigate to = '/'/>)
        }else{
            return (
                <div className="m-[30px] text-[20px]">
                    <form className="flex flex-col items-center justify-center w-fit mx-auto mt-[40px] p-5 border-[10px] border-[#FFC5D3] rounded-lg">
                        <h1 className="text-[#D97891] text-2xl font-bold mb-5">
                            Insertar Departamento
                        </h1>

                        <label>Introduzca el ID:</label>
                        <input className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaNumero} type="number"/>
                        <br />

                        <label>Introduzca la Marca:</label>
                        <input className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaMarca} type="text"/>
                        <br />

                        <label>Introduzca el Modelo:</label>
                        <input className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaModelo} type="text"/>
                        <br />

                        <label>Introduzca el Conductor:</label>
                        <input className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaConductor} type="text"/>
                        <br />

                        <label>Introduzca la imagen:</label>
                        <input className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaImagen} type="text"/>
                        <br />

                        <p className="text-red-600 font-bold">{this.state.mensaje}</p>

                        <button className="rounded-md bg-[#FFC5D3] border border-[#FFC5D3] px-[25px] pr-[30px] py-2 hover:bg-[#F5A9BE] transition-colors cursor-pointer" onClick={this.mandarCoche}
                        >GUARDAR</button>
                    </form>
                </div>
            )
        }
    }
}
