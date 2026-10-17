import error  from 'jquery';
import Global from '../Global';
import axios from 'axios';

export default class ServiceCoches {
    async obtenerCoches(){
        let url = Global.url;
        let endpoint= "api/coches";

        try {
            let response= await axios.get(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }
    async obtenerCoche(id){
        let url = Global.url;
        let endpoint= "api/coches/FindCoche/"+id;

        try {
            let response= await axios.get(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }

    async insertarCoche(coche) {
            let url = Global.url;
            let endpoint = "api/Coches/InsertCoche";

            try {
                let response= await axios.post(url+endpoint, coche);
            } catch (error) {
                throw error;
            }
        
    }

    async updateCoche(coche) {
        let url = Global.url;
        let endpoint = "api/Coches/UpdateCoche";

        try {
            let response= await axios.put(url+endpoint, coche);
        } catch (error) {
            throw error;
        }
    }

    async deleteCoche(id){
        let url = Global.url;
        let endpoint = "api/Coches/DeleteCoche/"+id;

        try {
            let response= await axios.delete(url+endpoint);
        } catch (error) {
            throw error;
        }
    }
}