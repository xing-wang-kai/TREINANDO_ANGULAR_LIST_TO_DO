import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Nota } from '../../models/Notas'

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  public notas: Nota[] = [];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.listarNotas().subscribe((nota)=>{
      console.table(nota);
      this.notas=nota;
    },
    (err)=>{
      console.log(err);
    })
  }

}
