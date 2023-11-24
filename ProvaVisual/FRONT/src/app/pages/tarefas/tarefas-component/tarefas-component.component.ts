import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa.models';

@Component({
  selector: 'app-tarefas-component',
  templateUrl: './tarefas-component.component.html',
  styleUrls: ['./tarefas-component.component.css']
})
export class TarefasComponentComponent implements OnInit {

  constructor(
    private client: HttpClient,
    public router : Router,
    private snackBar : MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>(`https://localhost:7015/api/tarefa/${this.tipoTarefa}`)
      .subscribe({
        next: (tarefas) => {
          if(tarefas){
            this.tarefas = tarefas
            console.log(tarefas)
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
  }

  tarefas : Tarefa[] = []
  tipoTarefa : string = "listar"

  estadoStatusClass(tarefa : Tarefa){
    if(tarefa.estado === "Não iniciada"){
      return "tarefaNI"
    } else if (tarefa.estado === "Em andamento") {
      return "tarefaEA"
    } else {
      return "tarefaC"
    }
  }

  encontrarStatus(tarefa : Tarefa){
    if(tarefa.estado === "Não iniciada"){
      return "Começar Tarefa"
    } else if (tarefa.estado === "Em andamento") {
      return "Concluir Tarefa"
    } else {
      return "Finalizada!"
    }
  }

  addTarefa(){
    this.router.navigate(["tarefas/criar"])
  }

  editTarefa(tarefa : Tarefa){
    this.snackBar.open("OOOPSSS, isso aqui ainda não existe, foi mal :/", "Ok", {
      duration: 5000,
    })
    // this.router.navigate([`tarefas/editar/${tarefa.tarefaId}`], { queryParams : { id : tarefa.tarefaId }})
  }

  alterarStatus(tarefa : Tarefa){
    this.client
      .patch(`https://localhost:7015/api/tarefa/alterar/${tarefa.tarefaId}`, null)
      .subscribe({
        next: (tarefa) => {
          this.ngOnInit()
        },
        error: (error) => {
          console.log(error)
        }
      })
  }

  listarTudo(){
    this.tipoTarefa = "listar"
    this.ngOnInit()
  }

  listarProntas(){
    this.tipoTarefa = "listarconcluidas"
    this.ngOnInit()
  }

  listarNaoProntas(){
    this.tipoTarefa = "listarnaoconcluidas"
    this.ngOnInit()
  }

}
