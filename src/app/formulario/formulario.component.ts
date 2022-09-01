import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public titulo: String;
  public nota: String;

  constructor(private service: ServiceService, private router: Router) {
    this.titulo = "";
    this.nota = "";
   }

  adicionar(){
    const novaNota = {titulo: this.titulo, nota: this.nota, data: new Date()};
    this.service.adicionarNota(novaNota).subscribe((nota)=>{
      console.table(nota);
      this.router.navigateByUrl('home')
    })
  }

  ngOnInit(): void {
  }

}
