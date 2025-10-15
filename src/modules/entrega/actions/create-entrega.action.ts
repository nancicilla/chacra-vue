import { chacraApi } from "@/api/chacraApi";
import type { Entrega } from "../interface/Entrega.interface";

export const createEntrega= async(entrega:Entrega)=>{
    try{
    await chacraApi.post('entrega',entrega)
    } catch(e){
        console.error(`no se pudo registra la entrega ${e}`)
    }
}