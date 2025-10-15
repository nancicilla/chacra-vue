import { chacraApi } from "@/api/chacraApi";
import type { Producto } from "../interface/Producto.interface";

export const createUpdateProduto= async(producto:Partial<Producto>)=>{
if(producto.id && producto.id!=null){
 await updateProducto(producto)
return
}
await createProducto(producto)
}

const createProducto= async(producto:Partial<Producto>)=>{
    try{
   return await chacraApi.post('/producto',producto)}
    catch(error){
     console.error(`No se pudo registrar el producto ${error}`)
    }
    
}
const updateProducto= async(producto:Producto)=>{
    try{
        const id= producto.id
        delete producto.id
       return await chacraApi.patch(`/producto/${id}`,producto)
    }catch(error){
        console.error(`No se puedo actualizar el producto ${error}`)
    }
}