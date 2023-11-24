import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa.models';
import { Categoria } from './../../../../models/categoria.models';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tarefa-cadastro-component',
  templateUrl: './tarefa-cadastro-component.component.html',
  styleUrls: ['./tarefa-cadastro-component.component.css']
})
export class TarefaCadastroComponentComponent implements OnInit {

  constructor(
    private client: HttpClient,
    public router : Router,
    private route: ActivatedRoute,
    private snackBar : MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.tarefaId = 0
    this.route.queryParams.subscribe(params => {
      this.tarefaId = params['id']
      console.log(this.tarefaId)
    })
    if(this.tarefaId != 0 && this.tarefaId != undefined){
      this.acaoPage = "Editar Tarefa"
      this.acaoBtn = "Salvar"
      this.iconBtn = "done"
      this.client
        .get<Tarefa>(`https://localhost:7015/api/tarefa/buscar/${this.tarefaId}`)
        .subscribe({
          next: (tarefa) => {
            if(tarefa){
              this.titulo.setValue(tarefa.titulo)
              this.descricao.setValue(tarefa.descricao)
              if(tarefa.categoria){
                this.categoria = tarefa.categoria?.nome
                console.log(tarefa.categoria)
              }
            }
          },
          error: (error) => {
            console.log(error)
          }
        })
    }
    this.client
      .get<Categoria[]>("https://localhost:7015/api/categoria/listar")
      .subscribe({
        next: (categorias) => {
          this.categorias = categorias
        },
        error: (error) => [
          console.log(error)
        ]
      })
  }

  categorias : Categoria[] = []
  acaoPage : string = "Criar Tarefa"
  acaoBtn : string = "Criar"
  iconBtn : string = "add"
  tarefaId : number = 0
  titulo = new FormControl('', Validators.required)
  descricao = new FormControl('', Validators.required)
  categoria : string = ""

  voltar(){
    this.router.navigate(["tarefas"])
  }

  salvarTarefa(){
    if(this.tarefaId != 0){
      let categoriaId : number = 0

      this.categorias.forEach(categoria => {
        if(categoria.nome === this.categoria){
          categoriaId = categoria.categoriaId
        }
      });

      let tarefa : Tarefa
      tarefa = {
        titulo : this.titulo.value,
        descricao : this.descricao.value,
        categoriaId : categoriaId
      }

      this.client
        .post<Tarefa>(`https://localhost:7015/api/tarefa/cadastrar`, tarefa)
        .subscribe({
          next: (tarefa) => {
            this.router.navigate(["tarefas"])
            this.snackBar.open("Tarefa criada!", "Ok")
          },
          error: (error) => {
            console.log(error)
          }
        })
    } else {
      let categoriaId : number = 0

      this.categorias.forEach(categoria => {
        if(categoria.nome === this.categoria){
          categoriaId = categoria.categoriaId
        }
      });

      let tarefa : Tarefa
      tarefa = {
        titulo : this.titulo.value,
        descricao : this.descricao.value,
        categoriaId : categoriaId
      }

      this.client
        .put<Tarefa>(`https://localhost:7015/api/tarefa/atualizar/${this.tarefaId}`, tarefa)
        .subscribe({
          next: (tarefa) => {
            this.router.navigate(["tarefas"])
            this.snackBar.open("Tarefa atualizada!", "Ok")
          },
          error: (error) => {
            console.log(error)
          }
        })
    }
  }
}
