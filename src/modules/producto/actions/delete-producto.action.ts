import { chacraApi } from "@/api/chacraApi"

export const deleteProducto= async(id:number)=>{
    try{
        console.log(id)
        await chacraApi.delete(`/producto/${id}`)
    }catch(error){
        console.error(`no se pudo eliminar el producto ${error}`)
    }
}