import { Categoria } from "./categoria.models"

export interface Tarefa {
    tarefaId? : number
    titulo : string
    descricao : string
    criadoEm? : string
    categoria? : Categoria
    categoriaId : number
    estado? : string
}