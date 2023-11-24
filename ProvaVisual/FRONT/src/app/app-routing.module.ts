import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TarefasComponentComponent } from './pages/tarefas/tarefas-component/tarefas-component.component';
import { TarefaCadastroComponentComponent } from './pages/tarefas/cadastro/tarefa-cadastro-component/tarefa-cadastro-component.component';

const routes: Routes = [
  {
    path : 'tarefas',
    component : TarefasComponentComponent
  },
  {
    path : 'tarefas/criar',
    component : TarefaCadastroComponentComponent
  },
  {
    path : 'tarefas/editar/:id',
    component : TarefaCadastroComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
