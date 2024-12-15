export class Tecnicatura {
    private nombre: string
    private duracion: number
    private cantidadAsignaturas: number
    private numeroResolucion: string
    private estadoVigenciaResolucion: string
    private fechaCaducidadResolucion: string

    constructor(nom: string, duracion: number, asignaturas: number, numResolucion: string, vigenciaResolucion: string, caducidadResolucion:string) {
        this.nombre = nom;
        this.duracion = duracion;
        this.cantidadAsignaturas = asignaturas;
        this.numeroResolucion = numResolucion;
        this.estadoVigenciaResolucion = vigenciaResolucion;
        this.fechaCaducidadResolucion = caducidadResolucion;
    }
}
