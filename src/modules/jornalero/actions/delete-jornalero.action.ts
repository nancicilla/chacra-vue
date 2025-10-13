import { chacraApi } from "@/api/chacraApi"

export const deleteJornalero=async(id:number)=>{
    await chacraApi.delete(`/jornalero/${id}`)

}