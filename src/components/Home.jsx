import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches'
import { NavLink } from 'react-router-dom'
import DetalleCoche from './DetalleCoche';

export default class Home extends Component {
    state= {
        coches:[],
        status: false,
        coche: null,
        idDetalle: 0
    }

    service = new ServiceCoches();
    obtenerCoches = async() =>{
        let datos = await this.service.obtenerCoches();
        this.setState({
            coches:datos
        })
    }
    mostrarDetalle = (id) => {
        this.setState({
            idDetalle : id,
            status: true
        })

    }
    

    componentDidMount = async() => {
        await this.obtenerCoches();
    }

    render() {
        return (
            <div className="m-[30px]">
                <h1 className="text-3xl font-bold text-gray-800 mb-[30px]">
                    Home
                </h1>

                <div className="overflow-x-auto">
                    <table className="mx-auto rounded-[10px] border-collapse text-center">
                        <thead>
                            <tr>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Numero</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Marca</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Modelo</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Conductor</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Imagen</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Detalle</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Update</th>
                                <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.coches.map((coche, index) => {
                                return (
                                    <tr key={index} className="hover:bg-pink-50 transition-colors">
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            {coche.idCoche}
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            {coche.marca}
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            {coche.modelo}
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            {coche.conductor}
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            <img
                                                src={coche.imagen}
                                                className="w-24 h-16 object-cover rounded-md mx-auto"
                                            />
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            <button onClick={()=>{this.mostrarDetalle(coche.idCoche)}}  className="inline-block bg-[#FFC5D3] hover:bg-pink-300 rounded-md px-3 py-2 transition-colors">
                                                Detalle
                                            </button>
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            <NavLink to={"/update/"+coche.idCoche}className="inline-block bg-[#FFC5D3] hover:bg-pink-300 rounded-md px-3 py-2 transition-colors">
                                                🔄
                                            </NavLink>
                                        </td>
                                        <td className="p-[10px] border border-[#D3D3D3]">
                                            <NavLink to={"/delete/"+coche.idCoche} className="inline-block bg-[#FFC5D3] hover:bg-pink-300 rounded-md px-3 py-2 transition-colors">
                                                🗑️
                                            </NavLink>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                            {this.state.status &&
                                (<DetalleCoche id={this.state.idDetalle}/>)
                            }
                </div>
            </div>
        )
    }
}
