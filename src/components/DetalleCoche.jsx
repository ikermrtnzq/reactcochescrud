import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches'

export default class DetalleCoche extends Component {
    service = new ServiceCoches();
    state ={
        coche: []
    }
    obtenerCoche = async(id) =>{
        let datos = await this.service.obtenerCoche(id)
        console.log(id)
        this.setState({
            coche : datos
        })
    }
    componentDidMount = async() =>{
        await this.obtenerCoche(this.props.id)
    }
    componentDidUpdate = async(oldProps) => {
        if(oldProps.id != this.props.id){
            await this.obtenerCoche(this.props.id)
        }
    }
    render() {
        return (
            <table className="mx-auto rounded-[10px] border-collapse text-center">
                <thead>
                    <tr>
                        <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Numero</th>
                        <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Marca</th>
                        <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Modelo</th>
                        <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Conductor</th>
                        <th className="bg-[#FFC5D3] p-[10px] border border-[#FFC5D3] border-b-[#D3D3D3]">Imagen</th>
                    </tr>
                </thead>

                <tbody>
                    <tr  className="hover:bg-pink-50 transition-colors">
                        <td className="p-[10px] border border-[#D3D3D3]">
                            {this.state.coche.idCoche}
                        </td>
                        <td className="p-[10px] border border-[#D3D3D3]">
                            {this.state.coche.marca}
                        </td>
                        <td className="p-[10px] border border-[#D3D3D3]">
                            {this.state.coche.modelo}
                        </td>
                        <td className="p-[10px] border border-[#D3D3D3]">
                            {this.state.coche.idCoche}
                        </td>
                        <td className="p-[10px] border border-[#D3D3D3]">
                            <img src={this.state.coche.imagen}className="w-24 h-16 object-cover rounded-md mx-auto"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
