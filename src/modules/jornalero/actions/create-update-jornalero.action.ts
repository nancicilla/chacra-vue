import { chacraApi } from "@/api/chacraApi";
import type { Jornalero } from "../interface/Jornalero.interface";
export const createUpdateJornalero= async(jornalero:Partial<Jornalero>)=>{
    if(jornalero.id && jornalero.id!=null){
        await updateJornalero(jornalero)
        return
    }
    console.log({jornalero})
    await createJornalero(jornalero)
}

const  updateJornalero= async(jornalero:Partial<Jornalero>)=> {
    try {
        const id= jornalero.id
        delete jornalero.id        
        await chacraApi.patch(`/jornalero/${id}`,jornalero)


    } catch (error) {
        console.log(error)
    throw new Error('No se pudo actualizar el nombre del Jornalero')

        
    }
}
 const createJornalero= async(jornalero:Partial<Jornalero>)=>{
 try{
   await chacraApi.post('jornalero',jornalero)
 }catch(error){
    
  
    alert(error.response.data.message)
    throw new Error(`No se pudo registrar al Jornalero ${error}`)
 }
 }