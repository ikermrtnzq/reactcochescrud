import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches';
import { Navigate } from 'react-router-dom';

export default class Update extends Component {

    id = this.props.id.id;
    service= new ServiceCoches();
    state ={
        coche : []
    }
    
    obtenerCoche = async(id) =>{
        let datos = await this.service.obtenerCoche(id)
        console.log(datos)
        this.setState({
            coche : datos
        })
    }
    cajaNumero= React.createRef();
    cajaMarca= React.createRef();
    cajaModelo= React.createRef();
    cajaConductor= React.createRef();
    cajaImagen= React.createRef();
    
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

    componentDidMount = async() => {
        await this.obtenerCoche(this.id)
    }
    render() {
        return (
            <div className="m-[30px] text-[20px]">
            {
                this.state.status == true &&
                (<Navigate to="/" />)
            }

            <div className="m-[30px] text-[20px]">
                <form className="flex flex-col items-center justify-center w-fit mx-auto mt-[40px] p-5 border-[10px] border-[#FFC5D3] rounded-lg">
                    <h1 className="text-[#D97891] text-2xl font-bold mb-5">
                        Insertar Departamento
                    </h1>

                    <label>Introduzca el ID:</label>
                    <input defaultValue={this.state.coche.idCoche} className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaNumero} type="number"/>
                    <br />

                    <label>Introduzca la Marca:</label>
                    <input defaultValue={this.state.coche.marca} className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaMarca} type="text"/>
                    <br />

                    <label>Introduzca el Modelo:</label>
                    <input defaultValue={this.state.coche.modelo} className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaModelo} type="text"/>
                    <br />

                    <label>Introduzca el Conductor:</label>
                    <input defaultValue={this.state.coche.conductor} className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaConductor} type="text"/>
                    <br />

                    <label>Introduzca la imagen:</label>
                    <input defaultValue={this.state.coche.imagen} className="border border-[#D97891] rounded px-2 py-1" ref={this.cajaImagen} type="text"/>
                    <br />

                    <p className="text-red-600 font-bold">
                        {this.state.mensaje}
                    </p>

                    <button type="button" className="rounded-md bg-[#FFC5D3] border border-[#FFC5D3] px-[25px] pr-[30px] py-2 hover:bg-[#F5A9BE] transition-colors cursor-pointer" onClick={this.mandarCoche}>
                        GUARDAR
                    </button>
                </form>
            </div>
        </div>
        )
    }
}
