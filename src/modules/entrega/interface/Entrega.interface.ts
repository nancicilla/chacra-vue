export interface Entrega{
    fechaRegistro:Date,
    idjornalero:number
    listadetalle:Detalle[]
}

interface Detalle{
     idproducto:number,
   
    cantidad:number
}