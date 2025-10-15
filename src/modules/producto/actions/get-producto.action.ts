import { chacraApi } from "@/api/chacraApi"
import type { Producto } from "../interface/Producto.interface"

export const getProducto=async()=>{
    try{
     const {data}=   await chacraApi.get<Producto>('/producto')
     return data
     
    }catch(error){
        console.error(`No se pudo obtener la lista de producto ${error}`)
    }
}