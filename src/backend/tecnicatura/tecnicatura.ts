export class Tecnicatura {
    private nombre:string
    private duracion:number
    private cantidadAsignaturas:number
    private numeroResolucion:string

    constructor(nom:string,duracion:number,asignaturas:number,numResolucion:string){
        this.nombre = nom;
        this.duracion = duracion;
        this.cantidadAsignaturas = asignaturas;
        this.numeroResolucion = numResolucion;
    }
}
