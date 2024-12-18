export class Tecnicatura {
    private nombre: string
    private duracion: number
    private cantidadAsignaturas: number
    private numeroResolucion: string
    private estadoVigencia: string
    private fechaCaducidad: string

    constructor(nom: string, duracion: number, asignaturas: number, numResolucion: string, estado: string, caducidad:string) {
        this.nombre = nom;
        this.duracion = duracion;
        this.cantidadAsignaturas = asignaturas;
        this.numeroResolucion = numResolucion;
        this.estadoVigencia = estado;
        this.fechaCaducidad = caducidad;
    }
}
