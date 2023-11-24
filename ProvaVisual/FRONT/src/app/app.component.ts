import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'FRONT';

  constructor(
    private snackBar : MatSnackBar,
    private client: HttpClient,
    public router : Router,
  ){

  }

  ooops(){
    this.snackBar.open("OOOPSSS, isso aqui ainda não existe, foi mal :/", "Ok", {
      duration: 5000,
    })
  }

  navigateTarefas(){
    this.router.navigate(['/tarefas'])
  }
}
