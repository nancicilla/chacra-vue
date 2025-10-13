import { chacraApi } from "@/api/chacraApi"
import type{ Jornalero } from '../interface/Jornalero.interface';
export const getJornaleros=async()=>{
const {data}= await chacraApi.get<Jornalero>('/jornalero')
return data
}