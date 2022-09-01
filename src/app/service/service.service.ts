import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Nota } from '../../models/Notas'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = 'http://localhost:3000/post'

  constructor( private httpClient: HttpClient) { }

  listarNotas(): Observable<Nota[]>{
    return this.httpClient.get<Nota[]>(this.url);
  }

  adicionarNota(nota: Nota): Observable<Nota>{
    return this.httpClient.post<Nota>(this.url, nota);
  }

}
