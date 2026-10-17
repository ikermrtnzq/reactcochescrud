import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches'
import { Navigate, NavLink } from 'react-router-dom';

export default class Delete extends Component {
    id = this.props.id.id
    state ={
        status: false,
        coche : []
    }

    service = new ServiceCoches();
    obtenerCoche = async(id) =>{
        let datos = await this.service.obtenerCoche(id)
        console.log(datos)
        this.setState({
            coche : datos
        })
    }
    borrarCoche = async() =>{
        let datos = await this.service.deleteCoche(this.id)
        this.setState({
            status: true
        })
    }
    componentDidMount = async() => {
        //console.log(this.id)
        await this.obtenerCoche(this.id)

    }
    render() {
        return (
            <div className="flex flex-col items-center justify-center w-fit mx-auto mt-[40px] p-5 border-[10px] border-[#FFC5D3] rounded-lg">
                {
                    this.state.status &&
                    (<Navigate to="/" />)
                }

                <h1 className="text-2xl font-bold text-[#D97891] text-center mb-5">¿Estás seguro de que quieres borrar este coche?</h1>

                <div className="flex flex-row flex-wrap justify-center gap-[25px] mb-5">
                    <h2 className="text-lg">Marca: {this.state.coche.marca}</h2>
                    <h2 className="text-lg">Modelo: {this.state.coche.modelo}</h2>
                </div>

                <div className="flex flex-row gap-[5px]">
                    <button type="button" className="bg-[#FFC5D3] border border-[#FFC5D3] rounded-md px-4 py-2 hover:bg-[#F5A9BE] transition-colors cursor-pointer" onClick={this.borrarCoche}>
                        SEGURO
                    </button>

                    <NavLink className="bg-[#FFC5D3] border border-[#FFC5D3] rounded-md px-4 py-2 hover:bg-[#F5A9BE] transition-colors" to="/">
                        CANCELAR
                    </NavLink>
                </div>
            </div>
        )
    }
}
